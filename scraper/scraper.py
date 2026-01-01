import requests
from bs4 import BeautifulSoup
import json

BASE_URL = "https://imslp.org"
CATEGORY_URL = "https://imslp.org/wiki/Category:For_trumpet"


def get_soup(url):
    headers = {
        "User-Agent": "Mozilla/5.0 (Educational IMSLP Metadata Scraper)"
    }
    resp = requests.get(url, headers=headers)
    resp.raise_for_status()
    return BeautifulSoup(resp.text, "html.parser")


def scrape_category():
    soup = get_soup(CATEGORY_URL)
    results = []

    for a in soup.select("#mw-pages li a"):
        title = a.text.strip()
        link = BASE_URL + a["href"]
        results.append({"title": title, "link": link})

    return results


def extract_metadata(soup, label):
    """Find metadata value by table header label"""
    table = soup.find("table", class_="metadata")
    if not table:
        return None

    for row in table.find_all("tr"):
        th = row.find("th")
        td = row.find("td")
        if th and td and label.lower() in th.text.lower():
            return td.text.strip()

    return None


def scrape_work_metadata(work):
    soup = get_soup(work["link"])

    work["year"] = extract_metadata(soup, "Composition Year ")

    return work


def main():
    works = scrape_category()
    print(f"Found {len(works)} works")

    scraped_data = []

    for work in works:
        print(f"Scraping: {work['title']}")
        try:
            scraped_data.append(scrape_work_metadata(work))
        except Exception as e:
            print(f"Failed: {e}")

    with open("imslptrumpet.json", "w", encoding="utf-8") as f:
        json.dump(scraped_data, f, indent=2, ensure_ascii=False)

    print("Done!")


if __name__ == "__main__":
    main()

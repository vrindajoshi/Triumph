import { useState } from 'react';

export default function SongTable() {
  const [data] = useState([
    { id: 1, name: 'Alice Johnson', role: 'Developer', department: 'Engineering', status: 'Active' },
    { id: 2, name: 'Bob Smith', role: 'Designer', department: 'Product', status: 'Active' },
    { id: 3, name: 'Carol White', role: 'Manager', department: 'Operations', status: 'Active' },
    { id: 4, name: 'David Brown', role: 'Analyst', department: 'Finance', status: 'Inactive' },
    { id: 5, name: 'Eve Davis', role: 'Developer', department: 'Engineering', status: 'Active' }
  ]);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const sortData = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;
    
    const aVal = a[sortConfig.key];
    const bVal = b[sortConfig.key];
    
    if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">Employee Directory</h1>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th 
                    className="px-6 py-4 text-left font-semibold cursor-pointer hover:bg-slate-700 transition-colors"
                    onClick={() => sortData('id')}
                  >
                    ID {sortConfig.key === 'id' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                  </th>
                  <th 
                    className="px-6 py-4 text-left font-semibold cursor-pointer hover:bg-slate-700 transition-colors"
                    onClick={() => sortData('name')}
                  >
                    Name {sortConfig.key === 'name' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                  </th>
                  <th 
                    className="px-6 py-4 text-left font-semibold cursor-pointer hover:bg-slate-700 transition-colors"
                    onClick={() => sortData('role')}
                  >
                    Role {sortConfig.key === 'role' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                  </th>
                  <th 
                    className="px-6 py-4 text-left font-semibold cursor-pointer hover:bg-slate-700 transition-colors"
                    onClick={() => sortData('department')}
                  >
                    Department {sortConfig.key === 'department' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                  </th>
                  <th 
                    className="px-6 py-4 text-left font-semibold cursor-pointer hover:bg-slate-700 transition-colors"
                    onClick={() => sortData('status')}
                  >
                    Status {sortConfig.key === 'status' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedData.map((row, index) => (
                  <tr 
                    key={row.id}
                    className={`border-b border-slate-200 hover:bg-slate-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                    }`}
                  >
                    <td className="px-6 py-4 text-slate-700">{row.id}</td>
                    <td className="px-6 py-4 text-slate-900 font-medium">{row.name}</td>
                    <td className="px-6 py-4 text-slate-700">{row.role}</td>
                    <td className="px-6 py-4 text-slate-700">{row.department}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        row.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <p className="mt-4 text-slate-600 text-sm">
          Click on column headers to sort. Total records: {data.length}
        </p>
      </div>
    </div>
  );
}
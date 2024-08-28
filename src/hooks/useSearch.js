import { useMemo } from 'react';

function useSearch(employees, query) {
  return useMemo(() => {
    if (!query) return employees;
    const lowerCaseQuery = query.toLowerCase();
    return employees.filter(employee =>
      employee.first_name.toLowerCase().includes(lowerCaseQuery) ||
      employee.last_name.toLowerCase().includes(lowerCaseQuery)
    );
  }, [employees, query]);
}

export default useSearch;

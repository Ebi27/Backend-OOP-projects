// Add your imports here.
import salaryData from "./modules/salaryData.js";
import {
  getRoles,
  getCompanies,
  getDataByRole,
  getDataByCompany,
} from "./modules/salaryData.js";
// Replace the empty array with the appropriate imported function/value
export const getAverageSalaryByRole = (role) => {
  const roleData = getRoles;
  const salariesOfRole = roleData.map((obj) => obj.salary);
  return calculateAverage(salariesOfRole);
};

// Replace the empty array with the appropriate imported function/value
export const getAverageSalaryByCompany = (company) => {
  const companyData = getCompanies();
  const salariesAtCompany = companyData.map((obj) => obj.salary);
  return calculateAverage(salariesAtCompany);
};

// Replace the empty array with the appropriate imported function/value
export const getSalaryAtCompany = (role, company) => {
  const companyData = getCompanies();
  const roleAtCompany = companyData.find((obj) => obj.role === role);
  return roleAtCompany.salary;
};

// Replace the empty array with the appropriate imported function/value
export const getIndustryAverageSalary = () => {
  const allSalaries = salaryData.map((obj) => obj.salary);
  return calculateAverage(allSalaries);
};

// Helper Function. Do not edit.
// Note: This function does not need to be exported since it is only used by the functions contained within this module.
export function calculateAverage(arrayOfNumbers) {
  let total = 0;
  arrayOfNumbers.forEach((number) => (total += number));
  return (total / arrayOfNumbers.length).toFixed(2);
}

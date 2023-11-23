// budget.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'budget-page',
  templateUrl: './budget-page.component.html',
  styleUrls: ['./budget-page.component.sass']
})
export class BudgetPageComponent {
  // This would be fetched from a service in a real app
  budget = {
    income: 2900,
    expectedIncome: 10200,
    spending: 7373,
    expectedSpending: 7829,
    budgets: {
      income: 10200,
      spending: -7829,
      goals: 0,
      leftOver: 2371
    },
    spendingDetails: [
      { category: 'Auto & Transport: Auto Insurance', spent: 290, budget: 195 },
      { category: 'Auto & Transport: Auto Payment', spent: 826, budget: 830 },
      // ... other categories
    ]
  };

  months = ['DEC \'22', 'JAN \'23', 'FEB \'23', //... and so on
  ];

  selectedMonth = 'NOV \'23';
}

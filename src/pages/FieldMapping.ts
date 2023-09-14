export class FieldMapping {
    static mapping = {
      'Current Age': '#current-age',
      'Retirement Age': '#retirement-age',
      'Current annual income': '#current-income',
      'Spouse annual income': '#spouse-income',
      'Current retirement savings': '#current-total-savings',
      'Current retirement contribution': '#current-annual-savings',
      'Annual retirement contribution increase': '#savings-increase-rate',
      'Social Security Income': '#yes-social-benefits',
      'Relationship status': '#married',
      'Social Security Override': '#social-security-override',
      'Additional Income': '#additional-income',
      'Retirement Duration': '#retirement-duration',
      'Post Retirement income increase with inflation': 'Yes',
      'Retirement Annual Income': '#retirement-annual-income',
      'Pre Retirement Roi': '#pre-retirement-roi',
      'Post Retirement Roi': '#post-retirement-roi',
    };
  
    static getFieldSelector(fieldName) {
      return this.mapping[fieldName];
    }
  }

  
export const requiredField = value => {
   if(value) return undefined;
   return 'Field is required';
}

export const maxLength = (length) => (value) => {
   if(value.length > length) return `Max length must be less than ${length}`
   return undefined 
}
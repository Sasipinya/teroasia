export const thaiDate = (date:Date)=>{ 
    

    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: 'numeric',
      weekday:'long',
    };
  
    return date.toLocaleDateString('th-TH', options);
}
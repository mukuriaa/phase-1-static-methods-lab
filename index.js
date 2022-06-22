class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  static sanitize(str) {
   
    return str.replace(/[^a-zA-Z0-9-' '']/g, '');
   }
  static titleize(str) {
     
    return str.replace(/[^a-zA-Z0-9-' '']/g, ' ').split(' ').map(word => {
      if(word=='and' || word=='the' || word=='of' || word=='a' || word=='an' || word=='but' || word=='for' || word=='at' || word=='by' || word=='from'){
        return word;
      }else{
        
        return this.capitalize(word);
      }
    }).join(' ');
  }

}

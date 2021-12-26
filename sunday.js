var g_class = {

  'name': "mechanical",
  
  'instructor': {
    
  'name': "sekhar",

   'subject': "manufacturing"

  },

  'students': [{
      
  'name': 'somu',
      
  'marks': 80,

 },

 {
     
 'name': 'raju',

 'marks': 89,

},

{
      
   'name': 'manju',

    'marks': 77,

}

}
 

for(var i=0; i<g_class.students.length;i++)

{
    
  if(g_class.students[i].marks > 85)
        
  console.log(g_class.students[i].name);

}   
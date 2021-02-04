const api_key = '&key=AIzaSyDp41zn-C0LGl_H6FjOmMsh7LXe-GPGMzI';
async function getData() {
    const response = await fetch('Mark.csv');
    const data = await response.text();     
    const table = data.split(/\n/).slice(1);   
    table.forEach(row => {
        let columns = row.split(',');     
            const newarr = columns[1].split(/\s/g);                
            let x = '';
            for(i = 0; i < newarr.length; i++){
                if (newarr[i] != ''){
                    x = x + newarr[i] + '+';
                }            
            }     
            const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${x}${columns[2]}+${columns[3]}${api_key}`;
            const response = await fetch(url);
            const data = 
            console.log(response);        

    })
}
getData();
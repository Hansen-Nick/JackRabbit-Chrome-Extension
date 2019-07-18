setTimeout(() => {
    let rows = document.querySelector('#PastEnrollResults').querySelectorAll('[role="row"]');
    console.log('HELLO I AM HERE');
    for (let i = 0; i < rows.length; i++) {
        if (i > 1) {
            let columns = rows[i].querySelectorAll('td');
            if (columns[11].title == 'Class Archived') {
                columns[4].style.backgroundColor = 'dodgerBlue';
                columns[4].querySelector('a').style.color = 'white';
            }
        }
    }
}, 300);
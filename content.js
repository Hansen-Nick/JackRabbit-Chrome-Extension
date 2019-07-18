if (window.location.href.indexOf('/Family/') > 0) {
    window.addEventListener('load', () => {
        setTimeout( () => {
            console.log('i have reached family page')
            let panel = document.querySelector('#PastEnrollResults');
            let rows = panel.querySelectorAll('[role="row"]');
            for (let i = 0; i < rows.length; i++) {
                if (i > 1) {
                    let columns = rows[i].querySelectorAll('td');
                    if (columns[11].title == 'Class Archived') {
                        columns[4].style.backgroundColor = 'dodgerBlue';
                        columns[4].querySelector('a').style.color = 'white';
                    }
                }
            }
        }, 500)
    })
} else {
    window.addEventListener('load', () => {
        setTimeout( () => {
            console.log(document.URL)
            console.log('i have reached student page')
            let panel = document.querySelector('#PastEnrollResults');
            let rows = panel.querySelectorAll('[role="row"]');
            for (let i = 0; i < rows.length; i++) {
                if (i > 1) {
                    let columns = rows[i].querySelectorAll('td');
                    if (columns[8].title == 'Class Archived') {
                        columns[1].style.backgroundColor = 'dodgerBlue';
                        columns[1].querySelector('a').style.color = 'white';
                    }
                }
            }
        }, 500)
    })
}
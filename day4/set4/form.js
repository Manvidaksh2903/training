

/// dissplaying the name on console
const firstnamechange = (e) => {
    console.log('firstname');
    console.log(e);
    console.log(e.target.value);
    const val = e.target.value;
    if (val.length > 3) {
        console.log('correct');
    }
}

function submitform(e) {
    e.preventDefault();
    console.log(e.target.value);
}


const form = document.getElementById('frm');
for (const input of form.elements) {
    if (input.tagName === 'INPUT') {
        const value = input.value;
        console.log(`${input.name}: ${value}`);
    }
}



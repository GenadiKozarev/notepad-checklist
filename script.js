const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
const unCheckAllButton = document.querySelector('button.vertical');
let lastChecked;

function unCheckAll() {
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}

function handleCheck(e) {
    let inBetween = false;
    // check if a user is pressing the 'shift' key down AND they are checking the box
    if (e.shiftKey && this.checked) {
        // loop over all checkboxes
        checkboxes.forEach(checkbox => {
            // 'this' is the currently selected checkbox, in other words - "the first checked"
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleCheck);
});
unCheckAllButton.addEventListener('click', unCheckAll);

const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');
textarea.focus();
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);
    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        })
    }
})
function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagel = document.createElement('span');
        tagel.classList.add('tag');
        tagel.innerText = tag;
        tagsEl.appendChild(tagel);

    });

}
function randomSelect() {
    const times = 30;
    const interval = setInterval(() => {
        const randomatag = pickRandomTag()
    }, 100
    )
}

function getout(obj) {
    obj.innerHTML = "Cursor is in container's area";
}
function Thanks(obj) {
    obj.innerHTML = "Cursor is out of the container";
}

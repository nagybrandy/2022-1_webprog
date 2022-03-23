var groups = document.querySelectorAll("optgroup");
var data = [{
        name: groups[0]['label'],
        values: [...groups[0].querySelectorAll("option")].map(item => item.value),
        contents: [...groups[0].querySelectorAll("option")].map(item => item.innerHTML)
    },
    {
        name: groups[1]['label'],
        values: [...groups[1].querySelectorAll("option")].map(item => item.value),
        contents: [...groups[1].querySelectorAll("option")].map(item => item.innerHTML)
    }
];
var type = document.createElement("select");
var subtype = document.querySelector("[name='pets']");
type.name = "pettype";
document.body.querySelector("label").insertBefore(type, subtype);

for (var i = 0; i < data.length; i++) {
    var obj = document.createElement("option");
    obj.value = data[i].name;
    obj.innerHTML = data[i].name;
    type.appendChild(obj);
}
function onChange(event) {
    var value = event.target.value;
    var item = data.filter(e => e.name == value)[0];
    var c = subtype.lastElementChild;
    while (c) {
        subtype.removeChild(c);
        c = subtype.lastElementChild;
    }
    for (var i = 0; i < item.values.length; i++) {
        var obj = document.createElement("option");
        obj.value = item.values[i];
        obj.innerHTML = item.contents[i];
        subtype.appendChild(obj);
    }
}
type.addEventListener('change', onChange);
type.selectedIndex = 0;
type.dispatchEvent(new Event('change'));
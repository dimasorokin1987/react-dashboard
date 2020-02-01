// const isMatch = (item, filterText) => filterText.split(' ').every(
//     txt => item.includes(txt)
// );
const isMatch = (item, filterText) => filterText.split(' ')
.reduce((i, txt) => {
    if(i<0) return i;
    i = item.indexOf(txt, i);
    if(i<0) return i;
    i += txt.length;
    return i;
},0)>=0;

export default state => state.list.filter(
    item => isMatch(item, state.filterText)
)
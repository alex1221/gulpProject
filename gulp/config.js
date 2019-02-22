let date = new Date(),
    Y = date.getFullYear(),
    M = date.getMonth() + 1,
    D = date.getDate() + 1,
    hh = date.getHours(),
    mm = date.getMinutes(),
    ss = date.getSeconds();

M = M > 9 ? m : '0' + M;
D = D > 9 ? D : '0' + D;
hh = hh > 9 ? hh : '0' + hh;
mm = mm > 9 ? mm : '0' + mm;
ss = ss > 9 ? ss : '0' + ss;

module.exports = {
    sourcePath: 'src/',
    buildPath: 'bulid/',
    build: {
        cName: '项目名称',
        srcPath: 'assets/',
        releaseName: 'project' + Y + M + D + hh + mm + ss
    }
}
const base = {
    get() {
        return {
            url : "http://localhost:8080/yiqingfanxiangguankong/",
            name: "yiqingfanxiangguankong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/yiqingfanxiangguankong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "社区疫情返乡管控系统"
        } 
    }
}
export default base

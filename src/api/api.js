import axios from "axios";
export const ERR_OK = 200;


const service = axios.create({
    baseURL: "./api", // api的base_url
});
// 获取行业列表
export function getIndustry(Class) {
    return service({
        url: "/industry/getIndustry",
        method: "get",
        params: {
            industryClass: Class
        }
    });
}
// 根据行业查询广告
export function getAdvert(id) {
    return service({
        url: "/advert/getAdvert",
        method: "get",
        params: {
            industryId: id
        }
    });
}
// 企业页面
export function discoverOtherCompanyByCondition(data) {
    return service({
        url: "/company/discoverOtherCompanyByCondition",
        method: "get",
        params: {
            id: data.id,
            name: data.name,
            firstIndustryId: data.firstIndustryId,
            secondIndustryId: data.secondIndustryId
        }
    });
}
// 获取收藏页面
export function getCollectionRecord(id) {
    return service({
        url: "/company/getCollectionRecord",
        method: "get",
        params: {
            id: did
        }
    });
}
// 获取历史记录
export function getHistoryRecord(id) {
    return service({
        url: "/company/getHistoryRecord",
        method: "get",
        params: {
            id: id
        }
    });
}
// 报名参加
export function enrollExhibition(data) {
    return service({
        url: "/enrollExhibition",
        method: "post",
        data: data
    });
}
// 查询所有展会
export function getAllExhibitions() {
    return service({
        url: "/getAllExhibitions",
        method: "get"
    });
}
// 获取所有参展商
export function getAllExhibitiors(id) {
    return service({
        url: "/getAllExhibitiors",
        method: "get",
        params: {
            exhibitionId: id
        }
    });
}
// 获取某个展会详情
export function getExhibitionInfoById(id) {
    return service({
        url: "/getExhibitionInfoById",
        method: "get",
        params: {
            exhibitionId: id
        }
    });
}
// 关注
export function cancelFocus(data) {
    return service({
        url: "/cancelFocus",
        method: "post",
        data: data
    });
}
// 取消关注
export function focus(data) {
    return service({
        url: "/focus",
        method: "post",
        data: data
    });
}
// 获取参加同一个展会的公司
export function getCompanyByTheSameExhibition(id) {
    return service({
        url: "/index/getCompanyByTheSameExhibition",
        method: "get",
        params: {
            id: id
        }
    });
}
// 获查看首页推荐广告banner
export function getIndexBanner() {
    return service({
        url: "/index/getIndexBanner",
        method: "get"
    });
}
// 查看首页推荐公司
export function getRecommendCompany(data) {
    return service({
        url: "/index/getRecommendCompany",
        method: "get",
        params: {
            secondIndustryId: data.secondIndustryId,
            id: data.id
        }
    });
}
// 可能感兴趣的公司
export function mayBeInterestedCompany(data) {
    return service({
        url: "/index/mayBeInterestedCompany",
        method: "get",
        params: {
            secondIndustryId: data.secondIndustryId,
            id: data.id
        }
    });
}
// 点击链接激活用户
export function activate(data) {
    return service({
        url: `/activate/${data}`,
        method: "get"
    });
}

// 修改密码
export function changePassword(data) {
    return service({
        url: `/changePassword`,
        method: "post",
        data: data
    });
}
// 邮箱验证
export function checkEmail(id) {
    return service({
        url: `/checkEmail`,
        method: "get",
        params: {
            id: id
        }
    });
}
// 判断是否激活
export function isActivate(id) {
    return service({
        url: `/isActivate/${id}`,
        method: "get"
    });
}
// 用户登录
export function login(data) {
    return service({
        url: `/login`,
        method: "post",
        data: data
    });
}
// 用户注册
export function register(data) {
    return service({
        url: `/register`,
        method: "post",
        data: data
    });
}
// 发送邮箱验证码
export function sendCode(username) {
    return service({
        url: `/sendCode`,
        method: "get",
        params: {
            username: username
        }
    });
}
// 获取所有消息通知
export function getAllMessage(id) {
    return service({
        url: `/getAllMessage`,
        method: "get",
        params: {
            id: id
        }
    });
}
// 设置已读
export function setMessageRead(id) {
    return service({
        url: `/setMessageRead`,
        method: "get",
        params: {
            id: id
        }
    });
}
// 删除产品手册
export function deleteProduct(id) {
    return service({
        url: `/product/deleteProduct`,
        method: "get",
        params: {
            id: id
        }
    });
}
// 获取所有产品手册
export function getAllProducts(id) {
    return service({
        url: `/product/getAllProducts`,
        method: "get",
        params: {
            id: id
        }
    });
}
// 保存产品手册
export function saveProduct(data) {
    return service({
        url: `/product/saveProduct`,
        method: "post",
        data: data
    });
}
// 搜索
export function search(content) {
    return service({
        url: `/search`,
        method: "get",
        params: {
            content: content
        }
    });
}
// 搜索工商
export function searchCompany(content) {
    return service({
        url: `/search/searchCompany`,
        method: "get",
        params: {
            content: content
        }
    });
}
// 搜索展位/展商
export function searchExhibitior(data) {
    return service({
        url: `/search/searchExhibitior`,
        method: "get",
        params: {
            content: data.content,
            eid: data.eid
        }
    });
}
// 保存用户信息
export function addUserInfo(data) {
    return service({
        url: `/user/addUserInfo`,
        method: "post",
        data: data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}
// 获取用户信息
export function getCompanyInfo(data) {
    return service({
        url: `/user/getCompanyInfo`,
        method: "get",
        params: {
            userId: data.userId,
            id: data.id
        }
    });
}
// 获取资料百分比 GET /user/getInfoPercent
export function getInfoPercent(id) {
    return service({
        url: `/user/getInfoPercent`,
        method: "get",
        params: {
            id: id
        }
    });
}
// 我需要设计
export function needDesign(id) {
    return service({
        url: `/user/needDesign`,
        method: "get",
        params: {
            id: id
        }
    });
}

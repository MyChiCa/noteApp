//测试环境
let baseUrl = 'http://106.15.193.147';
let opt = {
    //查询一级类目列表
    createTeam: {
      method: 'POST',
      url: baseUrl + '/api/v1/createteam'
    },
    joinTeam:{ // 加入团队
      method: 'POST',
      url: baseUrl + '/api/v1/jointeam'
    },
    createVacate:{ // 创建请假条
      url: baseUrl + '/api/v1/createvacate'
    },
    ManagementCenter:{ // 审批中心
      url: baseUrl + '/api/v1/managementcenter'
    },
    handleapply:{ // 处理审核
      url: baseUrl + '/api/v1/handleapply'
    }
}
module.exports =  opt;

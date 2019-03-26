
const api = appload('tool/apiRespond')
const toolhttp = appload('tool/http')

const config = appload('config')



module.exports = async function(req, res)
{
    try{
        let password = req.body.password
        let obj = await toolhttp.json(config.hcx_node_api_url + '/query?action=passwd&password='+password)
        // console.log(obj)
        obj.ret = 0
        api.success(res, obj)
    }catch(e){
        console.log(e)
        api.error(res, e)
    }
}

const path = require('path')
const fullPath = (pathname)=> path.resolve(__dirname,pathname)
const CarcoLessPlugin = require('craco-less')

module.exports ={
    plugins:[
        {
            plugin:CarcoLessPlugin
        }
    ],
    webpack:{
        alias:{
            "@": fullPath("src"),
            "components":fullPath("src/components"),
            "utils":fullPath("src/until")
        }
    }
}
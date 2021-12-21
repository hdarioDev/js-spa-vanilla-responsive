/**
 * CONFIGURACIONES PARA DAR VIDA AL PROYECTO
 */
const path = require('path')//traer path de node para acceder y saber donde estamos en directorios
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {//objeto 
    entry: './src/index.js',//punto de entrada
    output: {//donde vamos a poner el proyecto compilado listo para prod
        path: path.resolve(__dirname, 'dist'),//__dirname en donde te encuentres pones la carpeta
        filename: 'main.js'//archivo a generar
    },
    resolve: {//archivos a resolver
        extensions: ['.js']
    },
    module: {//reglas necesarias 
        rules: [//como identificar archivos
            {
                test: /\.js?/,//filtrar archivos elementos etc
                exclude: /node_modules/,//excluir
                use: {
                    loader: 'babel-loader',//
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true,//inuyectar valor
                template: './public/index.html',
                filename: './index.html'
            }
        ),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './src/styles/styles.css',
                    to: ''//lo LLEVAMOS A LA RAIZ PODRIAMOS LLEVARLO A ASSETS/CSS
                }
            ]
        })
    ]

}

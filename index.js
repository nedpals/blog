const resolve = require('path').resolve
const Metalsmith = require('metalsmith')
const yaml = require('js-yaml')
const fs = require('fs')
const config = require(resolve(__dirname, './metalsmith.json'))
const dir = __dirname

Metalsmith(__dirname)
    .source(resolve(__dirname, config.source))
    .destination(resolve(__dirname, config.destination))
    .clean(config.clean)
    .metadata(yaml.safeLoad(fs.readFileSync('./config.yaml')))

normalize(config.plugins).forEach(function (plugin) {
    for (var name in plugin) {
        var opts = plugin[name]
        var mod

        try {
            var local = resolve(dir, name);
            var npm = resolve(dir, 'node_modules', name)

            if (exists(local) || exists(local + '.js')) {
                mod = require(local)
            } else if (exists(npm)) {
                mod = require(npm)
            } else {
                mod = require(name)
            }
        } catch (e) {
            fatal('failed to require plugin "' + name + '".')
        }

        try {
            Metalsmith.use(mod(opts));
        } catch (e) {
            fatal('error using plugin "' + name + '"...', e.message + '\n\n' + e.stack)
        }
    }
})

function normalize(obj) {
    if (obj instanceof Array) return obj;
    var ret = []

    for (var key in obj) {
        var plugin = {}
        plugin[key] = obj[key]
        ret.push(plugin)
    }

    return ret
}

function fatal(msg, stack) {
    console.error()
    if (stack) {
        console.error()
        console.error(chalk.gray(stack))
    }
    console.error()
    process.exit(1)
}

Metalsmith.build((err) => {
    if (err) throw err
    done()
})
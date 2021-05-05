import { spawn, spawnSync } from 'child_process'
import fs from 'fs'

function retCmd (platform:string, pckg:string){
    const data  = fs.readFileSync('../commands.json')
    const json_data = JSON.parse(data.toString())
    let commands = json_data['platform'][platform][pckg]
    const res = commands['res']
    const cmd = commands['check_cmd']
    const args = commands['check_args']
    return [res, cmd, args]
}

const [res, cmd, args] = retCmd('linux', 'python')
const child = spawnSync(cmd, args)
const stdout = child.stdout.toString()
console.log(stdout.includes(res))

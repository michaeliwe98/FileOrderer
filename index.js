const chalk = require('chalk')
const fs = require('fs')
const readline = require('readline-sync');

console.log('==========================')
console.log(chalk.inverse('APLIKASI RENAME JUDUL FILM'))
console.log('==========================')

const path = readline.question("Masukan lokasi film : ")

console.log()
console.log(chalk.bgRed('Pastikan nama file sudah urut!'))
console.log()

fs.readdirSync(path).forEach(file => {
    if (!file.startsWith('._')) {
        console.log(file)
    }
});

console.log()
let isOrdered = readline.question("Apakah sudah urut (y/n) : ")
if (isOrdered === 'n') {
    console.log(chalk.inverse('AUF WIEDERSEHEN!'))
} else if (isOrdered === 'y') {
    var counter = 1
    fs.readdirSync(path).forEach(file => {
        if (!file.startsWith('._')) {
            var format = file.substr(file.length - 4)
            fs.renameSync(path + '/' + file, path + '/' + counter + format)
            counter++
        }
    })
    console.log()
    console.log('===========================================')
    console.log(chalk.inverse('TERIMA KASIH SUDAH MENGGUNAKAN APLIKASI INI'))
    console.log('===========================================')
} else {
    console.log(chalk.bgRed('Mohon pilih antara y/n!'))
}
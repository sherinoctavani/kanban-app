const { Task } = require ("../models/index.js")

module.exports = async (req, res, next) => {
    try {
            const task = await Task.findOne ({
                where : {
                    id : req.params.id
                }
            })

            if (!task) {
                throw {
                    status : 401,
                    msg : "Task Not Found"
                }
            }

            if (task.UserId === req.dataUser.id) {
                next()
            }else {
                throw {
                    status : 401,
                    msg : "You are not authorize to access this To do"
                }
            }
    } catch (error) {
            next (error)
        }
}
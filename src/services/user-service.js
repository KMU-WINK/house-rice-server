import UserRepository from '../repositorys/user-repository';

export async function register(args) {
    /*
    * args.username
    * args.password
    * args.nickname
    * args.name
    * args.phone
    * */
    const {
        username, password, nickname, name, phone,
    } = args; // args 에서 왼쪽 내용들을 꺼낸다.
    if (!await UserRepository.findOne({ username })) {
        const newUser = new UserRepository({
            username,
            password,
            nickname,
            name,
            phone,
        });
        await newUser.save();
    } else {
        // throw Error('~~~~')
    }
}

export async function withdrawal(username) {
	if (await UserRepository.findOne({ username })) {
		// console.log("찾음");
		await UserRepository.remove({"username": username});
		return true;
	} else {
		// console.log("못찾음");
		return false;
		// throw Error("this user doesn't exist!");
	}
}

export async function getUsers() {
    const rawUsers = await UserRepository.find();
    const users = rawUsers.map((row) => {
        const {
            name, username, nickname, phone,
        } = row;
        return {
            // eslint-disable-next-line no-underscore-dangle
            id: row._id,
            name,
            username,
            nickname,
            phone,
        };
    });
    return users || null; // 값이 있으면 보내고 없으면 null을 보내라.
}
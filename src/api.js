import axios from "axios";


const id = "YOUR_CLIENT_ID";
const sec = "YOU_SECRET_ID";
const params = `?client_id=${id}?client_secret=${sec}`;

const handleError =  (error) => console.error(error)

const getProfile = (username) => {
    return axios.get('https://api.github.com/users/' + username + params)
        .then(user => user.data)
        .catch(handleError)
        
}

const getRepos = (username) => {
    return axios.get('https://api.github.com/users/' + username + '/repos' + params + '&per_page=100')
        .then(repos => repos.data)
        .catch(handleError)
        
}

const getStarCount = (repos) => {
    return repos.reduce((count, repo) => count + repo.stargazers_count, 0)
}

const calculateScore = (profile, repos) => {
    const followers = profile.followers;
    const totalStars = getStarCount(repos);

    return(followers * 3) + totalStars;
}

const getUserData = (player) => {
    return axios.all( [
        getProfile(player),
        getRepos(player)
    ])
        .then(([profile, repos]) => {
            return {
                profile,
                score: calculateScore(profile, repos)
            }
        })
}


const sortPlayers = (players) => players.sort((a, b) => b.score - a.score)

export const battle = (players) => {
    return axios.all(players.map(getUserData))
        .then(sortPlayers)
        .catch(handleError)
}



export const  fetchPopularRepos = (language) => {
    const encodeURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);
        return axios.get(encodeURI)
            .then((response) => 
            response.data.items)
}

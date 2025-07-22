async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/liornes/Portfolio-Profissional-Leandro-Lima/refs/heads/main/data/profile.json';
    
    const fetching = await fetch(url);

    return await fetching.json()
}
const links = {
  github: 'Rafaelrrb',
  youtube: 'Rafaelrrb',
  facebook: 'Rafaelrrb',
  instagram: 'Rafaelrrb',
  twitter: 'Rafaelrrb'
}

function changeSocialMediaLink() {
  //document.getElementById('name').textContent = 'Rafael R Borba'  pega o id do nome e coloca um novo nome no lugar

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `http://${social}.com/${links[social]}`
  }
}

changeSocialMediaLink()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImag.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

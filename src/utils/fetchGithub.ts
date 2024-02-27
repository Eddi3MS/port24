export async function fetchGithub() {
  let user = {
    name: 'Edson Marcelo',
    avatar: '/avatar.webp',
  }
  try {
    const res = await fetch('https://api.github.com/users/Eddi3MS')
      .then((res) => res.json())
      .then((data) => {
        const { name, avatar_url, blog } = data
        return {
          ...(typeof name === 'string' && { name }),
          ...(typeof avatar_url === 'string' && { avatar: avatar_url }),
        }
      })
    user = {
      ...user,
      ...res,
    }
  } catch (error) {
    console.error(error)
  } finally {
    return user
  }
}

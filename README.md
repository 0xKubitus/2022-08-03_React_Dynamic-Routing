<div align="center">

  [![THP Badge](https://github.com/0xKubitus/Usefull-Stuff-for-README/blob/main/assets/mkdwn-badges/the-hacking-project.svg
  )](https://www.thehackingproject.org/)

  # Dynamic Routing with React
  
  #### How to manage the content of a page according to its URL?
  
  ![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  
  </div>
  
</br>
  
 versions:
  
      "react": "^18.2.0"
      "react-router-dom": "^6.3.0"

</br>
</br>

## Key Notions
To create dynamic URLs, we use a Route with a `path` that is a little different from a classic Route.  
Indeed, part of the URL will be preceded by `:`, and will correspond to a variable.

In all the child components of this route, we can import the `useParams()` <u>hook</u>, which allows us to retrieve this variable. And thanks to this variable, we then display the content we want.

Don't hesitate paying a visit to <a href="https://v5.reactrouter.com/web/guides/quick-start">React Router's website</a> for some help.

<br/>
<hr/>
<br/>

## How to use this repo:
I suggest that you follow along the below tutorial but I also invite you to take a look at my 'demo'.

For that, simply clone this repo on your machine, then open it in a Terminal window.
Then you can copy and paste the following commands:
```
npm i
npm start
```
That's it! This will open my 'demo' in your browser! :wink:

<br/>
<hr/>
<br/>

# Tutorial 

<br/>

### Intro

Let's imagine we have a `Book` component.  
This one would search in an API, based on the URL.  
If the URL is, for example, www.mondomaine.fr/book/le-club-des-incorrigibles-optimistes, we want to display the book "Le club des incorrigibles optimistes".


<br/>
<br/>

<details>
<summary>
CLICK HERE TO READ MY TUTORIAL FULL INSTRUCTIONS:
</summary>
<br>

  # Setting up a dynamic router
  
#### Here is a list of books:

```
const books = [
  {
    slug: "le-club-des-incorrigibles-optimistes",
    title: "Le club des incorrigibles optimistes",
    author: "Jean-Michel Guenassia",
    description: "Michel Marini avait douze ans en 1959, à l'époque du rock'n'roll et de la guerre d'Algérie. Il était photographe amateur, lecteur compulsif et joueur de baby-foot au Balto de Denfert-Rochereau. Dans l'arrière-salle du bistrot, il a rencontré Igor, Léonid, Sacha, Imré et les autres, qui avaient traversé le Rideau de Fer pour sauver leur peau, abandonnant leurs amours, leur famille, trahissant leurs idéaux et tout ce qu'ils étaient. Ils s'étaient retrouvés à Paris dans ce club d'échecs d'arrière-salle que fréquentaient aussi Kessel et Sartre. Et ils étaient liés par un terrible secret que Michel finirait par découvrir. Cette rencontre bouleversa définitivement la vie du jeune garçon. Parce qu'ils étaient tous d'incorrigibles optimistes. Il manifeste un naturel épatant pour développer une dispute à table, nous faire partager les discussions entre un Russe communiste et un Hongrois antistalinien.",
  },
  {
    slug: "pars-vite-et-reviens-tard",
    title: "Pars vite et reviens tard",
    author: "Fred Vargas",
    description: "Qui glisse des annonces incompréhensibles dans la boîte à messages du Crieur de la place Edgar- Quinet ? Est-ce l'oeuvre d'un fou ? D'un maniaque ? Ou encore d'un pervers impuissant qui cherche à établir son pouvoir en enfonçant l'homme de la rue dans son inculture crasse ? Un retraité lettré, 'conseiller en choses de la vie', et le commissaire Jean-Baptiste Adamsberg trouvent ces messages souterrains, putrides et dangereux. Et pour cause. Ce sont des annonces de mort, de destruction générale, de catastrophe : elles annoncent la peste. Lorsque d'étranges signes tracés à la peinture noire font leur apparition sur des portes d'appartements, le dispositif est en place. Le cauchemar peut commencer. Personnages sortis de nulle part, intrigue passionnante, dialogues jubilatoires. Auteure inspirée, Fred Vargas ne se rattache décidément à aucun courant et détourne avec brio les conventions du genre.",
  },
  {
    slug: "la-peau-de-chagrin",
    title: "La peau de chagrin",
    author: "Balzac",
    description: "Raphaël de Valentin est un jeune marquis malchanceux, ruiné et solitaire, au bord du suicide. Il doit sa survie à un antiquaire, chez qui il trouve par hasard un talisman, une 'peau de chagrin' censée exaucer le moindre de ses désirs. Désespéré par son odieuse vie, le jeune homme décide de céder aux caprices et aux excès. Il s’ accapare la richesse et l’ amour qui le fuyaient jusqu’ alors.Mais chaque vœu exprimé rétrécit la peau de chagrin, et diminue l’ existence de Raphaël. Vieilli, malade, il est terrifié par le pouvoir de cette peau qui emporte avec elle des fragments de sa jeunesse.L’ usage inconsidéré qu’ il fait de son talisman l’ obligera à combattre sa nouvelle dépendance, pour éviter l’ accomplissement de cette étrange et inquiétante prophétie.",
  },
];

export default books;
```

I've put it in a `books.js` file, inside a `data` folder, at the root of `src`.  
It is ready to be imported (with the `export default books;` line above), so I'll be able to import it into my components, thanks to `import books from 'data/books';`

Now, map on the books to create a `Navbar` component, containing links to the different books.   
The link will be made like this: `/book/slug-of-the-book`.

Then, create a Routes containing a single route, which returns a `Book` component. 
But this `Book` component is going to have data that varies based on the URL.  
To indicate to your `Route` that my URL will be dynamic (and that I will have to retrieve part of the URL) I must declare my variable URL part, preceded by `:`, then give a variable name that I want to this part from the URL.
```
  <Routes>
    <Route path="/book/:bookSlug" element={<Book />} />
  </Routes>
```

In my Book component, I will have to retrieve this part of the URL, and its content. For that, I will use the `useParams()` hook provided by `react-router-dom`.

This hook returns an object that contains the parameters of the browser's current URL. Used as below in my component, it will allow me to retrieve the content of the `bookSlug` parameter from the URL:
```
const { bookSlug } = useParams();
```

Now, if you display this variable in your component, when you click on the different links of our Navbar, you should see the text of your page change, recovering the slug.

Next step: depending on our slug, we will have to fetch the book with the correct slug. If this book exists, then we return the book information, otherwise we display an error message.


To see if the book existed, and retrieve it if so, I chose to use `find , and assign it to a state `currentBook`.
```
const Book = () => {
  const { bookSlug } = useParams();
  const [currentBook, setCurrentBook] = useState(undefined)

  useEffect(() => {
    const foundBook = books.find((book) => book.slug === bookSlug);
    setCurrentBook(foundBook);
  }, [bookSlug])

  // Rest of my component
```

Then I'll make a conditional rendering: if `currentBook` is not `undefined`, then I return the contents of the book. Otherwise, I return an error paragraph.

By default, I indicate that we have no book selected. As soon as the component is mounted or the URL changes, I call `setCurrentBook` passing it the book, thanks to `useEffect()`.

So, if `currentBook` does contain a book, I return all of its information. Otherwise I put an error message. This allows us, for example, not to have a bug, in the event that the user himself enters a personalized URL.

This is called a dynamic router.

</details>

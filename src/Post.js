// @flow

export default class Post{
   title : string
   description: string
   path: string //TODO: Create type file
   body: string //TODO: Create type html
   original: string
   

   constructor(content: string) {
      this.original = content
   }
}

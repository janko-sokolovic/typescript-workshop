
export default class AnimalDirective {

   restrict = "E";
   template = require("./animal.html");
   scope = {
     animal: "="
   }

}

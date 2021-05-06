import {html, render} from 'lit-html';
import { Employee } from './employee';
import {Engineer} from './engineer'

export function cardTemplate(employee : any) :string 
{

    let {Role, UniqueField, UniqueFieldValue, Icon} = employee.getUniqueMap();
    let template = 
`
<div class="columns">
  <div class="column ">
    <div class="card w-25">
        <div class="card-header bg-info text-light">
            <h5 class=""> ${employee.getName()} </h5>
            <p> ${employee.getRole()} <i class= ${Icon} style="display:inline; margin: 3px;"></i></p> 
        </div>

<div class="card-body">
    <div class="card-body border-dark">
      <ul class="list-group">
        <li class="list-group-item list-group-item-action">ID: ${employee.getId()}</li>
        <li class="list-group-item list-group-item-action"> E-mail ${employee.getEmail()}   </li>
        <li class="list-group-item list-group-item-action"> ${UniqueField} : ${UniqueFieldValue} </li>
      </ul>
    </div>    
</div>
</div>
</div>
</div>`

    return template;

}

export function pageTemplate(card: string):string
{
    let template = `
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css" integrity="sha384-wESLQ85D6gbsF459vf1CiZ2+rr+CsxRY0RpiF1tLlQpDnAgg6rwdsUF1+Ics2bni" crossorigin="anonymous">
  </head>
  <body>

  ${card}    
  
  </body>
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

    `
    return template;
}




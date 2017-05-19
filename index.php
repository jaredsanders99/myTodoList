<!DOCTYPE html>
<html>
<head>
    <title>ToDo</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/app.css">
</head>
<body>
<div class="container">
    <div class="row">
        <div class="col-sm-6">
           <div class="h1container">
               <h1>My Todo List</h1>
           </div> 
        </div>
        <div class="col-sm-6">
            <img src="http://realtycandy.com/wp-content/uploads/2014/04/idx-Logo-idx-broker-real-estate-websites.png">
            <div class="clearfix"></div>
            <form id="todoForm" method="get" action="<?php echo $_SERVER['PHP_SELF']; ?>">
                <input type="text" name="newTask" id="newTaskId" value="" placeholder="Add A new item">
                <button type="submit">
                    Add
                </button>
            </form>
        </div>
    </div>
    
    <p>
        <ol id="taskList" class="list-unstyled">
            <li>
                <label for="test">
                    <input type="checkbox" id="test"></input>
                    &nbsp;Checkbox
                </label>
            </li>
            <li>
                <label for="test2">
                    <input type="checkbox" id="test2"></input>
                    &nbsp;Checkbox2
                </label>
            </li>
        </ol>
    </p>
</div>
<script src="js/app.js" type="text/javascript"></script>
</body>
</html>
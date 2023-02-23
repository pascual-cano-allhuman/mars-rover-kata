## Mars Rover Kata

```
                                                                    ||
                                                  __..--".          ||
                                 __..--""'._..--"" . . . .'.        ||
                         __..--"". . . . . . .'. . . . . . .'.      ||
                 __..--"". . . . .'. . . . . . .'. . . . . . .'.   //
         __..--"". . '.  . . . . . .'. . . . . . .'. . . . . . .'.//
  _..--""  . . . . . . '.  . . . . . .'. . . . . . .'. . . . . . .||
:". . . .'.  . . . . . . '.  . . . . . .'. . . . . . .'. . . . . .||'.
':. . . . .'.  . . . . . . '.  . . . . . .'. . . . . . .'. . . . .||__>
  ':. . . . .'.  . . . . . . '.  . . . . . .'. . . . . . .'.__..-o||
    ':. . . . .'.  . . . . . . '.  . . . . . .'. . . . .';Y"->.  ""
      ':. . . . .'.  . . . . . . '.  . . . . . .'. . . __.>.:'
        ':. . . . .'.  . . . . . . '.  . . . . __..--"" ..+"'.
   _..-._ ':. . . . .'.  . . . . . . '.__..--"" ....:::::.|   '.
 ."'' \_--" >:. . . . .'.  . . __..,-|" . ..::::::::::::::'--""-:.
' ..'\J.-  "8-':. . .  __..--"" ...-I  \ '. '::::::::::::::::::::".
'/'\\88o. ,O \  ':.--""....:|:::'''''\ ='. }-._'::::::::::::::::::|
8  8|PP|"(:. \-" ""':::::::|:::.((::='/ .\""-.:_ ':::::::::::''_.'  _..
 8  8|::/ \'::Y  _____':::::|::::.\\[ .\ "/"..* *"-. '''__..--"")\,"".-.\_
'\b d/""===\==V::.--..__':::|:::::.|,'*."".:.. "_-.*'.""    _.-"-""\? "_=''.
\\'".'"' .: :-.::.        ':|:::.'.'*.' __..--""   '.*':--"".-"?,  .)=""'\ \\
 '.''...''_/   ''::      _\\--.'.'*.'-""   _..-._ _..>.*;-""@_.-/-" '\.-"""-.\
   '-::--"            .-"@"}.'.'*.:)     ."\' \ \'.--'_'-'     '\. \-'-""-   '.
                     <\  _...'*.'      .' \.'\ '\ \\""         '\ '' ' .-.\   |
                     _\"" .---'        -\. '\.-"""-.\           \'|    ._)/   '
                   ."\.'-"\'.         '\. \-'-""-   '.           \\  '---"   /
                 .' \.'\ '\ \\        '\ '' ' .-.\   |            '.       _/
                 -\. '\.-"""-.\        \'|    ._)/   '              '-..--"
                '\. \-'-""-   '.        \\  '---"   /
                '\ '' ' .-.\   |         '.       _/
                 \'|    ._)/   '           '-..--"
                  \\  '---"   /
                   '.       _/
                     '-..--"
```

## Requirements

-   A position in Mars is represented by two values (x,y) which represent the latitude and longitude.
-   Mars map wraps on the edges.
-   The rover may receive one of these commands: move forward, move backward, rotate left, rotate right.
-   You are given the initial starting point (x,y) of a rover and the direction (north,south,east,west) it is facing.
-   The rover has an obstacle detection system that would prevent the robot from crashing ignoring the command.

## TDD

-   Create a new test checking a case not satisfied yet by your code. Tests are in RED now.
-   Modify your code until the test is passed. Test are now in GREEN.
-   Optionally with the test in GREEN you may want to refactor your existing code, the refactor should keep the tests in GREEN.
-   Before creating new tests you may consider create a commit to consolidate your code.
-   Start over with a new test that fails.

## Additional info

-   We'll assume that Mars available coordinates are a 4x4 grid. Coordinates for obstacles in Mars are provided in `OBSTACLES_COORDS`.
-   A test route has been provided in `test-route.ts`. Part of the challenge is to figure out the final position for that route.
-   The types provided and the signature of `getRoverFinalPosition` shouldn't be altered. They are a closed API that we need to keep.
-   New types or new functions can be added to split the problem.

$(document).ready(function() { 
$curURL = "http://www.warbyparker.com/womens-eyewear-beckett-eyeglass-frame-striped-chestnut";
$curCat = "womens";

$curFrame = "";


	$product = new Array();
	$frameArray = new Array();
	$tempArray = new Array();
	$htoAvailable = new Array();
	
$product["eyewear-beckett-eyeglass-frame-black-matte"] = [["Beckett Revolver Black Matte"],["Beckett Striped Chestnut", "eyewear-beckett-eyeglass-frame-striped-chestnut"],["Beckett Striped Evergreen", "eyewear-beckett-eyeglass-frame-striped-evergreen"],["Roosevelt Revolver Black Matte", "eyewear-roosevelt-eyeglass-frame-black"],["Winston Revolver Black", "eyewear-winston-eyeglass-frame-black"],["Huxley Revolver Black", "eyewear-huxley-eyeglass-frame-black"]];
$htoAvailable["eyewear-beckett-eyeglass-frame-black-matte"] = "TRUE";


$product["eyewear-beckett-eyeglass-frame-striped-chestnut"] = [["Beckett Striped Chestnut"],["Beckett Striped Evergreen", "eyewear-beckett-eyeglass-frame-striped-evergreen"],["Beckett Revolver Black Matte", "eyewear-beckett-eyeglass-frame-black-matte"],["Roosevelt Striped Chestnut", "eyewear-roosevelt-eyeglass-frame-striped-tortoise"],["Winston Revolver Black", "eyewear-winston-eyeglass-frame-black"],["Huxley Whiskey Tortoise", "eyewear-huxley-eyeglass-frame-dark-tortoise"]];
$htoAvailable["eyewear-beckett-eyeglass-frame-striped-chestnut"] = "TRUE";


$product["eyewear-beckett-eyeglass-frame-striped-evergreen"] = [["Beckett Striped Evergreen"],["Beckett Striped Chestnut", "eyewear-beckett-eyeglass-frame-striped-chestnut"],["Beckett Revolver Black Matte", "eyewear-beckett-eyeglass-frame-black-matte"],["Roosevelt Striped Chestnut", "eyewear-roosevelt-eyeglass-frame-striped-tortoise"],["Winston Revolver Black", "eyewear-winston-eyeglass-frame-black"],["Huxley Whiskey Tortoise", "eyewear-huxley-eyeglass-frame-dark-tortoise"]];
$htoAvailable["eyewear-beckett-eyeglass-frame-striped-evergreen"] = "TRUE";


$product["eyewear-begley-eyeglass-frame-greystone"] = [["Begley Greystone"],["Begley Whiskey Tortoise", "eyewear-begley-eyeglass-frame-whiskey-tortoise"],["Begley Midnight Blue", "eyewear-begley-eyeglass-frame-blue"],["Sinclair Greystone", "eyewear-sinclair-eyeglass-frame-greystone"],["Monroe Revolver Black Matte", "eyewear-monroe-eyeglass-frame-black"],["Fillmore Revolver Black", "eyewear-fillmore-eyeglass-frame-black"]];
$htoAvailable["eyewear-begley-eyeglass-frame-greystone"] = "TRUE";


$product["eyewear-begley-eyeglass-frame-whiskey-tortoise"] = [["Begley Whiskey Tortoise"],["Begley Greystone", "eyewear-begley-eyeglass-frame-greystone"],["Begley Midnight Blue", "eyewear-begley-eyeglass-frame-blue"],["Monroe Striped Maple", "eyewear-monroe-eyeglass-frame-striped-maple"],["Fillmore Tennessee Whiskey", "eyewear-fillmore-eyeglass-frame-dark-tortoise"],["Sinclair Greystone", "eyewear-sinclair-eyeglass-frame-greystone"]];
$htoAvailable["eyewear-begley-eyeglass-frame-whiskey-tortoise"] = "FALSE";


$product["eyewear-begley-eyeglass-frame-blue"] = [["Begley Midnight Blue"],["Begley Greystone", "eyewear-begley-eyeglass-frame-greystone"],["Begley Whiskey Tortoise", "eyewear-begley-eyeglass-frame-whiskey-tortoise"],["Sinclair Midnight Blue", "eyewear-sinclair-eyeglass-frame-blue"],["Monroe Revolver Black Matte", "eyewear-monroe-eyeglass-frame-black"],["Fillmore Revolver Black", "eyewear-fillmore-eyeglass-frame-black"]];
$htoAvailable["eyewear-begley-eyeglass-frame-blue"] = "TRUE";


$product["colonel-monocle-frame-tortoise"] = [["Colonel Whiskey Tortoise"],["", ""],["", ""],["", ""],["", ""],["", ""]];
$htoAvailable["colonel-monocle-frame-tortoise"] = "TRUE";


$product["eyewear-colton-eyeglass-frame-black"] = [["Colton Revolver Black Crystal"],["Colton Whiskey Tortoise", "eyewear-colton-eyeglass-frame-dark-tortoise"],["Colton Sandalwood Matte", "eyewear-colton-eyeglass-frame-light-tortoise"],["Colton Tangerine", "eyewear-colton-eyeglass-frame-brights"],["Huxley Revolver Black", "eyewear-huxley-eyeglass-frame-black"],["Webb Revolver Black Crystal", "eyewear-webb-eyeglass-frame-black"]];
$htoAvailable["eyewear-colton-eyeglass-frame-black"] = "TRUE";


$product["eyewear-colton-eyeglass-frame-dark-tortoise"] = [["Colton Whiskey Tortoise"],["Colton Sandalwood Matte", "eyewear-colton-eyeglass-frame-light-tortoise"],["Colton Revolver Black Crystal", "eyewear-colton-eyeglass-frame-black"],["Colton Tangerine", "eyewear-colton-eyeglass-frame-brights"],["Huxley Whiskey Tortoise", "eyewear-huxley-eyeglass-frame-dark-tortoise"],["Huxley Tennessee Whiskey", "eyewear-huxley-eyeglass-frame-dark-tortoise-crystal-on-bottom"]];
$htoAvailable["eyewear-colton-eyeglass-frame-dark-tortoise"] = "TRUE";


$product["eyewear-colton-eyeglass-frame-light-tortoise"] = [["Colton Sandalwood Matte"],["Colton Whiskey Tortoise", "eyewear-colton-eyeglass-frame-dark-tortoise"],["Colton Revolver Black Crystal", "eyewear-colton-eyeglass-frame-black"],["Colton Tangerine", "eyewear-colton-eyeglass-frame-brights"],["Huxley Sandalwood Matte", "eyewear-huxley-eyeglass-frame-light-tortoise"],["Huxley Tennessee Whiskey", "eyewear-huxley-eyeglass-frame-dark-tortoise-crystal-on-bottom"]];
$htoAvailable["eyewear-colton-eyeglass-frame-light-tortoise"] = "TRUE";


$product["eyewear-colton-eyeglass-frame-brights"] = [["Colton Tangerine"],["Colton Sandalwood Matte", "eyewear-colton-eyeglass-frame-light-tortoise"],["Colton Whiskey Tortoise", "eyewear-colton-eyeglass-frame-dark-tortoise"],["Colton Revolver Black Crystal", "eyewear-colton-eyeglass-frame-black"],["Huxley Sandalwood Matte", "eyewear-huxley-eyeglass-frame-light-tortoise"],["Webb Whiskey Tortoise Matte", "eyewear-webb-eyeglass-frame-dark-tortoise"]];
$htoAvailable["eyewear-colton-eyeglass-frame-brights"] = "TRUE";


$product["eyewear-crosby-eyeglass-frame-black"] = [["Crosby Revolver Black"],["Crosby Greystone", "eyewear-crosby-eyeglass-frame-graystone"],["Crosby Burgundy Fade", "eyewear-crosby-eyeglass-frame-burgundy"],["Winston Revolver Black", "eyewear-winston-eyeglass-frame-black"],["Huxley Revolver Black", "eyewear-huxley-eyeglass-frame-black"],["Thatcher Revolver Black", "eyewear-thatcher-eyeglass-frame-black"]];
$htoAvailable["eyewear-crosby-eyeglass-frame-black"] = "TRUE";


$product["eyewear-crosby-eyeglass-frame-graystone"] = [["Crosby Greystone"],["Crosby Burgundy Fade", "eyewear-crosby-eyeglass-frame-burgundy"],["Crosby Revolver Black", "eyewear-crosby-eyeglass-frame-black"],["Winston Lunar Fade", "eyewear-winston-eyeglass-frame-dark-moon-fade"],["Huxley Revolver Black", "eyewear-huxley-eyeglass-frame-black"],["Thatcher Whiskey Tortoise", "eyewear-thatcher-eyeglass-frame-dark-tortoise"]];
$htoAvailable["eyewear-crosby-eyeglass-frame-graystone"] = "TRUE";


$product["eyewear-crosby-eyeglass-frame-burgundy"] = [["Crosby Burgundy Fade"],["Crosby Greystone", "eyewear-crosby-eyeglass-frame-graystone"],["Crosby Revolver Black", "eyewear-crosby-eyeglass-frame-black"],["Winston Old Fashioned Fade", "eyewear-winston-eyeglass-frame-old-fashioned-fade"],["Huxley Tennessee Whiskey", "eyewear-huxley-eyeglass-frame-dark-tortoise-crystal-on-bottom"],["Huxley Sandalwood Matte", "eyewear-huxley-eyeglass-frame-light-tortoise"]];
$htoAvailable["eyewear-crosby-eyeglass-frame-burgundy"] = "FALSE";


$product["eyewear-digby-eyeglass-frame-dark-tortoise"] = [["Digby Whiskey Tortoise Matte"],["Digby Striped Chestnut", "eyewear-digby-eyeglass-frame-striped-tortoise"],["Digby Tennessee Whiskey", "eyewear-digby-eyeglass-frame-dark-tortoise-crystal-on-bottom"],["Larkin Oakwood Brown", "eyewear-larkin-eyeglass-frame-black_4"],["Wiloughby Tennessee Whiskey", "eyewear-wiloughby-eyeglass-frame-dark-tortoise-crystal-on-bottom"],["Wiloughby Striped Chestnut", "eyewear-wiloughby-eyeglass-frame-striped-tortoise"]];
$htoAvailable["eyewear-digby-eyeglass-frame-dark-tortoise"] = "FALSE";


$product["eyewear-digby-eyeglass-frame-dark-tortoise-crystal-on-bottom"] = [["Digby Tennessee Whiskey"],["Digby Whiskey Tortoise Matte", "eyewear-digby-eyeglass-frame-dark-tortoise"],["Digby Striped Chestnut", "eyewear-digby-eyeglass-frame-striped-tortoise"],["Larkin Oakwood Brown", "eyewear-larkin-eyeglass-frame-black_4"],["Wiloughby Tennessee Whiskey", "eyewear-wiloughby-eyeglass-frame-dark-tortoise-crystal-on-bottom"],["Wiloughby Striped Chestnut", "eyewear-wiloughby-eyeglass-frame-striped-tortoise"]];
$htoAvailable["eyewear-digby-eyeglass-frame-dark-tortoise-crystal-on-bottom"] = "TRUE";


$product["eyewear-digby-eyeglass-frame-striped-tortoise"] = [["Digby Striped Chestnut"],["Digby Whiskey Tortoise Matte", "eyewear-digby-eyeglass-frame-dark-tortoise"],["Digby Tennessee Whiskey", "eyewear-digby-eyeglass-frame-dark-tortoise-crystal-on-bottom"],["Larkin Oakwood Brown", "eyewear-larkin-eyeglass-frame-black_4"],["Wiloughby Striped Chestnut", "eyewear-wiloughby-eyeglass-frame-striped-tortoise"],["Wiloughby Tennessee Whiskey", "eyewear-wiloughby-eyeglass-frame-dark-tortoise-crystal-on-bottom"]];
$htoAvailable["eyewear-digby-eyeglass-frame-striped-tortoise"] = "FALSE";


$product["eyewear-felton-eyeglass-frame-black"] = [["Felton Revolver Black"],["Felton Striped Maple", "eyewear-felton-eyeglass-frame-striped-maple"],["Felton Old Fashioned Fade", "eyewear-felton-eyeglass-frame-old-fashioned-fade"],["Pierce Revolver Black", "eyewear-pierce-eyeglass-frame-black"],["Wiloughby Checkered Revolver", "eyewear-wiloughby-eyeglass-frame-brights"],["Wiloughby Tennessee Whiskey", "eyewear-wiloughby-eyeglass-frame-dark-tortoise-crystal-on-bottom"]];
$htoAvailable["eyewear-felton-eyeglass-frame-black"] = "FALSE";


$product["eyewear-felton-eyeglass-frame-striped-maple"] = [["Felton Striped Maple"],["Felton Revolver Black", "eyewear-felton-eyeglass-frame-black"],["Felton Old Fashioned Fade", "eyewear-felton-eyeglass-frame-old-fashioned-fade"],["Wiloughby Striped Chestnut", "eyewear-wiloughby-eyeglass-frame-striped-tortoise"],["Wiloughby Tennessee Whiskey", "eyewear-wiloughby-eyeglass-frame-dark-tortoise-crystal-on-bottom"],["Pierce Oakwood Brown", "eyewear-pierce-eyeglass-frame-brown"]];
$htoAvailable["eyewear-felton-eyeglass-frame-striped-maple"] = "FALSE";


$product["eyewear-felton-eyeglass-frame-old-fashioned-fade"] = [["Felton Old Fashioned Fade"],["Felton Striped Maple", "eyewear-felton-eyeglass-frame-striped-maple"],["Felton Revolver Black", "eyewear-felton-eyeglass-frame-black"],["Wiloughby Checkered Revolver", "eyewear-wiloughby-eyeglass-frame-brights"],["Pierce Oakwood Brown", "eyewear-pierce-eyeglass-frame-brown"],["Pierce Greystone", "eyewear-pierce-eyeglass-frame-greustone"]];
$htoAvailable["eyewear-felton-eyeglass-frame-old-fashioned-fade"] = "FALSE";


$product["eyewear-fillmore-eyeglass-frame-black"] = [["Fillmore Revolver Black"],["Fillmore Sandalwood Matte", "eyewear-fillmore-eyeglass-frame-light-tortoise"],["Fillmore Tennessee Whiskey", "eyewear-fillmore-eyeglass-frame-dark-tortoise"],["Begley Greystone", "eyewear-begley-eyeglass-frame-greystone"],["Monroe Revolver Black Matte", "eyewear-monroe-eyeglass-frame-black"],["Begley Midnight Blue", "eyewear-begley-eyeglass-frame-blue"]];
$htoAvailable["eyewear-fillmore-eyeglass-frame-black"] = "TRUE";


$product["eyewear-fillmore-eyeglass-frame-dark-tortoise"] = [["Fillmore Tennessee Whiskey"],["Fillmore Sandalwood Matte", "eyewear-fillmore-eyeglass-frame-light-tortoise"],["Fillmore Revolver Black", "eyewear-fillmore-eyeglass-frame-black"],["Begley Whiskey Tortoise", "eyewear-begley-eyeglass-frame-whiskey-tortoise"],["Monroe Striped Maple", "eyewear-monroe-eyeglass-frame-striped-maple"],["Sinclair Burgundy Fade", "eyewear-sinclair-eyeglass-frame-burgundy"]];
$htoAvailable["eyewear-fillmore-eyeglass-frame-dark-tortoise"] = "TRUE";


$product["eyewear-fillmore-eyeglass-frame-light-tortoise"] = [["Fillmore Sandalwood Matte"],["Fillmore Revolver Black", "eyewear-fillmore-eyeglass-frame-black"],["Fillmore Tennessee Whiskey", "eyewear-fillmore-eyeglass-frame-dark-tortoise"],["Begley Whiskey Tortoise", "eyewear-begley-eyeglass-frame-whiskey-tortoise"],["Monroe Striped Maple", "eyewear-monroe-eyeglass-frame-striped-maple"],["Sinclair Burgundy Fade", "eyewear-sinclair-eyeglass-frame-burgundy"]];
$htoAvailable["eyewear-fillmore-eyeglass-frame-light-tortoise"] = "TRUE";


$product["eyewear-finn-eyeglass-frame-black"] = [["Finn Revolver Black"],["Finn Amber", "eyewear-finn-eyeglass-frame-amber-tortoise"],["Finn Sandalwood Matte", "eyewear-finn-eyeglass-frame-light-tortoise"],["Zagg Revolver Black Matte", "eyewear-zagg-eyeglass-frame-black"],["Webb Revolver Black Crystal", "eyewear-webb-eyeglass-frame-black"],["Webb Whiskey Tortoise Matte", "eyewear-webb-eyeglass-frame-dark-tortoise"]];
$htoAvailable["eyewear-finn-eyeglass-frame-black"] = "TRUE";


$product["eyewear-finn-eyeglass-frame-light-tortoise"] = [["Finn Sandalwood Matte"],["Finn Amber", "eyewear-finn-eyeglass-frame-amber-tortoise"],["Finn Revolver Black", "eyewear-finn-eyeglass-frame-black"],["Zagg Tennessee Whiskey", "eyewear-zagg-eyeglass-frame-dark-tortoise-crystal-on-bottom"],["Zagg Striped Chestnut", "eyewear-zagg-eyeglass-frame-striped-tortoise"],["Webb Whiskey Tortoise Matte", "eyewear-webb-eyeglass-frame-dark-tortoise"]];
$htoAvailable["eyewear-finn-eyeglass-frame-light-tortoise"] = "TRUE";


$product["eyewear-finn-eyeglass-frame-amber-tortoise"] = [["Finn Amber"],["Finn Sandalwood Matte", "eyewear-finn-eyeglass-frame-light-tortoise"],["Finn Revolver Black", "eyewear-finn-eyeglass-frame-black"],["Webb Amber", "eyewear-webb-eyeglass-frame-amber-tortoise"],["Zagg Striped Chestnut", "eyewear-zagg-eyeglass-frame-striped-tortoise"],["Zagg Tennessee Whiskey", "eyewear-zagg-eyeglass-frame-dark-tortoise-crystal-on-bottom"]];
$htoAvailable["eyewear-finn-eyeglass-frame-amber-tortoise"] = "FALSE";


$product["eyewear-griffin-eyeglass-frame-black"] = [["Griffin Revolver Black"],["Griffin Greystone", "eyewear-griffin-eyeglass-frame-grey"],["Crosby Revolver Black", "eyewear-crosby-eyeglass-frame-black"],["Owen Revolver Black Matte", "eyewear-owen-eyeglass-frame-black-matte"],["Sinclair Greystone", "eyewear-sinclair-eyeglass-frame-greystone"],["Owen Striped Chestnut", "eyewear-owen-eyeglass-frame-owen-striped-tortoise"]];
$htoAvailable["eyewear-griffin-eyeglass-frame-black"] = "TRUE";


$product["eyewear-griffin-eyeglass-frame-grey"] = [["Griffin Greystone"],["Griffin Revolver Black", "eyewear-griffin-eyeglass-frame-black"],["Crosby Greystone", "eyewear-crosby-eyeglass-frame-graystone"],["Owen Revolver Black Matte", "eyewear-owen-eyeglass-frame-black-matte"],["Owen Striped Chestnut", "eyewear-owen-eyeglass-frame-owen-striped-tortoise"],["Sinclair Greystone", "eyewear-sinclair-eyeglass-frame-greystone"]];
$htoAvailable["eyewear-griffin-eyeglass-frame-grey"] = "TRUE";


$product["eyewear-huxley-eyeglass-frame-black"] = [["Huxley Revolver Black"],["Huxley Tennessee Whiskey", "eyewear-huxley-eyeglass-frame-dark-tortoise-crystal-on-bottom"],["Huxley Whiskey Tortoise", "eyewear-huxley-eyeglass-frame-dark-tortoise"],["Huxley Sandalwood Matte", "eyewear-huxley-eyeglass-frame-light-tortoise"],["Winston Revolver Black", "eyewear-winston-eyeglass-frame-black"],["Beckett Revolver Black Matte", "eyewear-beckett-eyeglass-frame-black-matte"]];
$htoAvailable["eyewear-huxley-eyeglass-frame-black"] = "TRUE";


$product["eyewear-huxley-eyeglass-frame-dark-tortoise"] = [["Huxley Whiskey Tortoise"],["Huxley Tennessee Whiskey", "eyewear-huxley-eyeglass-frame-dark-tortoise-crystal-on-bottom"],["Huxley Sandalwood Matte", "eyewear-huxley-eyeglass-frame-light-tortoise"],["Huxley Revolver Black", "eyewear-huxley-eyeglass-frame-black"],["Winston Old Fashioned Fade", "eyewear-winston-eyeglass-frame-old-fashioned-fade"],["Beckett Striped Chestnut", "eyewear-beckett-eyeglass-frame-striped-chestnut"]];
$htoAvailable["eyewear-huxley-eyeglass-frame-dark-tortoise"] = "TRUE";


$product["eyewear-huxley-eyeglass-frame-dark-tortoise-crystal-on-bottom"] = [["Huxley Tennessee Whiskey"],["Huxley Whiskey Tortoise", "eyewear-huxley-eyeglass-frame-dark-tortoise"],["Huxley Sandalwood Matte", "eyewear-huxley-eyeglass-frame-light-tortoise"],["Huxley Revolver Black", "eyewear-huxley-eyeglass-frame-black"],["Winston Old Fashioned Fade", "eyewear-winston-eyeglass-frame-old-fashioned-fade"],["Beckett Striped Chestnut", "eyewear-beckett-eyeglass-frame-striped-chestnut"]];
$htoAvailable["eyewear-huxley-eyeglass-frame-dark-tortoise-crystal-on-bottom"] = "TRUE";


$product["eyewear-huxley-eyeglass-frame-light-tortoise"] = [["Huxley Sandalwood Matte"],["Huxley Whiskey Tortoise", "eyewear-huxley-eyeglass-frame-dark-tortoise"],["Huxley Tennessee Whiskey", "eyewear-huxley-eyeglass-frame-dark-tortoise-crystal-on-bottom"],["Huxley Revolver Black", "eyewear-huxley-eyeglass-frame-black"],["Winston Old Fashioned Fade", "eyewear-winston-eyeglass-frame-old-fashioned-fade"],["Beckett Striped Chestnut", "eyewear-beckett-eyeglass-frame-striped-chestnut"]];
$htoAvailable["eyewear-huxley-eyeglass-frame-light-tortoise"] = "TRUE";


$product["eyewear-japhy-eyeglass-frame-black"] = [["Japhy Revolver Black Crystal"],["Japhy Whiskey Tortoise", "eyewear-japhy-eyeglass-frame-dark-tortoise"],["Japhy Sandalwood Matte", "eyewear-japhy-eyeglass-frame-light-tortoise"],["Japhy Crystal Matte", "eyewear-japhy-eyeglass-frame-clear"],["Zagg Revolver Black Matte", "eyewear-zagg-eyeglass-frame-black"],["Pierce Revolver Black", "eyewear-pierce-eyeglass-frame-black"]];
$htoAvailable["eyewear-japhy-eyeglass-frame-black"] = "FALSE";


$product["eyewear-japhy-eyeglass-frame-dark-tortoise"] = [["Japhy Whiskey Tortoise"],["Japhy Sandalwood Matte", "eyewear-japhy-eyeglass-frame-light-tortoise"],["Japhy Revolver Black Crystal", "eyewear-japhy-eyeglass-frame-black"],["Japhy Crystal Matte", "eyewear-japhy-eyeglass-frame-clear"],["Zagg Tennessee Whiskey", "eyewear-zagg-eyeglass-frame-dark-tortoise-crystal-on-bottom"],["Zagg Striped Chestnut", "eyewear-zagg-eyeglass-frame-striped-tortoise"]];
$htoAvailable["eyewear-japhy-eyeglass-frame-dark-tortoise"] = "FALSE";


$product["eyewear-japhy-eyeglass-frame-light-tortoise"] = [["Japhy Sandalwood Matte"],["Japhy Whiskey Tortoise", "eyewear-japhy-eyeglass-frame-dark-tortoise"],["Japhy Revolver Black Crystal", "eyewear-japhy-eyeglass-frame-black"],["Japhy Crystal Matte", "eyewear-japhy-eyeglass-frame-clear"],["Zagg Striped Chestnut", "eyewear-zagg-eyeglass-frame-striped-tortoise"],["Pierce Oakwood Brown", "eyewear-pierce-eyeglass-frame-brown"]];
$htoAvailable["eyewear-japhy-eyeglass-frame-light-tortoise"] = "FALSE";


$product["eyewear-japhy-eyeglass-frame-clear"] = [["Japhy Crystal Matte"],["Japhy Sandalwood Matte", "eyewear-japhy-eyeglass-frame-light-tortoise"],["Japhy Whiskey Tortoise", "eyewear-japhy-eyeglass-frame-dark-tortoise"],["Japhy Revolver Black Crystal", "eyewear-japhy-eyeglass-frame-black"],["Thompson Crystal Matte", "eyewear-thompson-eyeglass-frame-clear"],["Pierce Greystone", "eyewear-pierce-eyeglass-frame-greustone"]];
$htoAvailable["eyewear-japhy-eyeglass-frame-clear"] = "TRUE";


$product["eyewear-langston-eyeglass-frame-black"] = [["Langston Revolver Black Crystal"],["Langston Amber", "eyewear-langston-eyeglass-frame-amber-tortoise"],["Langston Whiskey Tortoise Matte", "eyewear-langston-eyeglass-frame-dark-tortoise"],["Nedwin Revolver Black Crystal", "eyewear-nedwin-eyeglass-frame-black"],["Sibley Revolver Black", "eyewear-sibley-eyeglass-frame-black"],["Reece Midnight Blue", "eyewear-reece-eyeglass-frame-blue"]];
$htoAvailable["eyewear-langston-eyeglass-frame-black"] = "TRUE";


$product["eyewear-langston-eyeglass-frame-dark-tortoise"] = [["Langston Whiskey Tortoise Matte"],["Langston Amber", "eyewear-langston-eyeglass-frame-amber-tortoise"],["Langston Revolver Black Crystal", "eyewear-langston-eyeglass-frame-black"],["Sibley Whiskey Tortoise Matte", "eyewear-sibley-eyeglass-frame-dark-tortoise"],["Nedwin Amber", "eyewear-nedwin-eyeglass-frame-amber-tortoise"],["Reece Whiskey Tortoise", "eyewear-reece-eyeglass-frame-dark-tortoise"]];
$htoAvailable["eyewear-langston-eyeglass-frame-dark-tortoise"] = "TRUE";


$product["eyewear-langston-eyeglass-frame-amber-tortoise"] = [["Langston Amber"],["Langston Whiskey Tortoise Matte", "eyewear-langston-eyeglass-frame-dark-tortoise"],["Langston Revolver Black Crystal", "eyewear-langston-eyeglass-frame-black"],["Nedwin Amber", "eyewear-nedwin-eyeglass-frame-amber-tortoise"],["Sibley Amber", "eyewear-sibley-eyeglass-frame-amber-tortoise"],["Reece Sandalwood Matte", "#N/A"]];
$htoAvailable["eyewear-langston-eyeglass-frame-amber-tortoise"] = "FALSE";


$product["eyewear-larkin-eyeglass-frame-black_2"] = [["Larkin Revolver Black"],["Larkin Oakwood Brown", "eyewear-larkin-eyeglass-frame-black_4"],["Larkin Lunar Fade", "eyewear-larkin-eyeglass-frame-lunar-fade"],["Felton Revolver Black", "eyewear-felton-eyeglass-frame-black"],["Felton Striped Maple", "eyewear-felton-eyeglass-frame-striped-maple"],["Thompson Revolver Black", "eyewear-thompson-eyeglass-frame-black"]];
$htoAvailable["eyewear-larkin-eyeglass-frame-black_2"] = "TRUE";


$product["eyewear-larkin-eyeglass-frame-lunar-fade"] = [["Larkin Lunar Fade"],["Larkin Oakwood Brown", "eyewear-larkin-eyeglass-frame-black_4"],["Larkin Revolver Black", "eyewear-larkin-eyeglass-frame-black_2"],["Felton Old Fashioned Fade", "eyewear-felton-eyeglass-frame-old-fashioned-fade"],["Digby Tennessee Whiskey", "eyewear-digby-eyeglass-frame-dark-tortoise-crystal-on-bottom"],["Felton Striped Maple", "eyewear-felton-eyeglass-frame-striped-maple"]];
$htoAvailable["eyewear-larkin-eyeglass-frame-lunar-fade"] = "FALSE";


$product["eyewear-larkin-eyeglass-frame-black_4"] = [["Larkin Oakwood Brown"],["Larkin Revolver Black", "eyewear-larkin-eyeglass-frame-black_2"],["Larkin Lunar Fade", "eyewear-larkin-eyeglass-frame-lunar-fade"],["Digby Striped Chestnut", "eyewear-digby-eyeglass-frame-striped-tortoise"],["Digby Whiskey Tortoise Matte", "eyewear-digby-eyeglass-frame-dark-tortoise"],["Digby Tennessee Whiskey", "eyewear-digby-eyeglass-frame-dark-tortoise-crystal-on-bottom"]];
$htoAvailable["eyewear-larkin-eyeglass-frame-black_4"] = "TRUE";


$product["eyewear-miles-eyeglass-frame-black"] = [["Miles Revolver Black"],["Miles Amber", "eyewear-miles-eyeglass-frame-amber-tortoise"],["Miles Sandalwood Matte", "eyewear-miles-eyeglass-frame-light-tortoise"],["Webb Revolver Black Crystal", "eyewear-webb-eyeglass-frame-black"],["Sinclair Greystone", "eyewear-sinclair-eyeglass-frame-greystone"],["Webb Amber", "eyewear-webb-eyeglass-frame-amber-tortoise"]];
$htoAvailable["eyewear-miles-eyeglass-frame-black"] = "TRUE";


$product["eyewear-miles-eyeglass-frame-light-tortoise"] = [["Miles Sandalwood Matte"],["Miles Amber", "eyewear-miles-eyeglass-frame-amber-tortoise"],["Miles Revolver Black", "eyewear-miles-eyeglass-frame-black"],["Sinclair Burgundy Fade", "eyewear-sinclair-eyeglass-frame-burgundy"],["Preston Sandalwood Matte", "eyewear-preston-eyeglass-frame-light-tortoise"],["Preston Whiskey Tortoise", "eyewear-preston-eyeglass-frame-dark-tortoise"]];
$htoAvailable["eyewear-miles-eyeglass-frame-light-tortoise"] = "FALSE";


$product["eyewear-miles-eyeglass-frame-amber-tortoise"] = [["Miles Amber"],["Miles Sandalwood Matte", "eyewear-miles-eyeglass-frame-light-tortoise"],["Miles Revolver Black", "eyewear-miles-eyeglass-frame-black"],["Sinclair Burgundy Fade", "eyewear-sinclair-eyeglass-frame-burgundy"],["Preston Whiskey Tortoise", "eyewear-preston-eyeglass-frame-dark-tortoise"],["Webb Amber", "eyewear-webb-eyeglass-frame-amber-tortoise"]];
$htoAvailable["eyewear-miles-eyeglass-frame-amber-tortoise"] = "TRUE";


$product["eyewear-monroe-eyeglass-frame-black"] = [["Monroe Revolver Black Matte"],["Monroe Striped Maple", "eyewear-monroe-eyeglass-frame-striped-maple"],["Begley Midnight Blue", "eyewear-begley-eyeglass-frame-blue"],["Begley Greystone", "eyewear-begley-eyeglass-frame-greystone"],["Fillmore Revolver Black", "eyewear-fillmore-eyeglass-frame-black"],["Begley Whiskey Tortoise", "eyewear-begley-eyeglass-frame-whiskey-tortoise"]];
$htoAvailable["eyewear-monroe-eyeglass-frame-black"] = "TRUE";


$product["eyewear-monroe-eyeglass-frame-striped-maple"] = [["Monroe Striped Maple"],["Monroe Revolver Black Matte", "eyewear-monroe-eyeglass-frame-black"],["Begley Whiskey Tortoise", "eyewear-begley-eyeglass-frame-whiskey-tortoise"],["Begley Greystone", "eyewear-begley-eyeglass-frame-greystone"],["Fillmore Tennessee Whiskey", "eyewear-fillmore-eyeglass-frame-dark-tortoise"],["Fillmore Sandalwood Matte", "eyewear-fillmore-eyeglass-frame-light-tortoise"]];
$htoAvailable["eyewear-monroe-eyeglass-frame-striped-maple"] = "TRUE";


$product["eyewear-nedwin-eyeglass-frame-black"] = [["Nedwin Revolver Black Crystal"],["Nedwin Amber", "eyewear-nedwin-eyeglass-frame-amber-tortoise"],["Nedwin Summer Green", "eyewear-nedwin-eyeglass-frame-green"],["Langston Revolver Black Crystal", "eyewear-langston-eyeglass-frame-black"],["Sibley Revolver Black", "eyewear-sibley-eyeglass-frame-black"],["Sibley Amber", "eyewear-sibley-eyeglass-frame-amber-tortoise"]];
$htoAvailable["eyewear-nedwin-eyeglass-frame-black"] = "TRUE";


$product["eyewear-nedwin-eyeglass-frame-amber-tortoise"] = [["Nedwin Amber"],["Nedwin Revolver Black Crystal", "eyewear-nedwin-eyeglass-frame-black"],["Nedwin Summer Green", "eyewear-nedwin-eyeglass-frame-green"],["Langston Amber", "eyewear-langston-eyeglass-frame-amber-tortoise"],["Sibley Amber", "eyewear-sibley-eyeglass-frame-amber-tortoise"],["Sibley Whiskey Tortoise Matte", "eyewear-sibley-eyeglass-frame-dark-tortoise"]];
$htoAvailable["eyewear-nedwin-eyeglass-frame-amber-tortoise"] = "TRUE";


$product["eyewear-nedwin-eyeglass-frame-green"] = [["Nedwin Summer Green"],["Nedwin Amber", "eyewear-nedwin-eyeglass-frame-amber-tortoise"],["Nedwin Revolver Black Crystal", "eyewear-nedwin-eyeglass-frame-black"],["Langston Amber", "eyewear-langston-eyeglass-frame-amber-tortoise"],["Sibley Amber", "eyewear-sibley-eyeglass-frame-amber-tortoise"],["Sibley Whiskey Tortoise Matte", "eyewear-sibley-eyeglass-frame-dark-tortoise"]];
$htoAvailable["eyewear-nedwin-eyeglass-frame-green"] = "TRUE";


$product["eyewear-owen-eyeglass-frame-black-matte"] = [["Owen Revolver Black Matte"],["Owen Striped Chestnut", "eyewear-owen-eyeglass-frame-owen-striped-tortoise"],["Beckett Revolver Black Matte", "eyewear-beckett-eyeglass-frame-black-matte"],["Beckett Striped Evergreen", "eyewear-beckett-eyeglass-frame-striped-evergreen"],["Beckett Striped Chestnut", "eyewear-beckett-eyeglass-frame-striped-chestnut"],["Roosevelt Striped Chestnut", "eyewear-roosevelt-eyeglass-frame-striped-tortoise"]];
$htoAvailable["eyewear-owen-eyeglass-frame-black-matte"] = "TRUE";


$product["eyewear-owen-eyeglass-frame-owen-striped-tortoise"] = [["Owen Striped Chestnut"],["Owen Revolver Black Matte", "eyewear-owen-eyeglass-frame-black-matte"],["Beckett Striped Chestnut", "eyewear-beckett-eyeglass-frame-striped-chestnut"],["Beckett Striped Evergreen", "eyewear-beckett-eyeglass-frame-striped-evergreen"],["Beckett Revolver Black Matte", "eyewear-beckett-eyeglass-frame-black-matte"],["Roosevelt Striped Chestnut", "eyewear-roosevelt-eyeglass-frame-striped-tortoise"]];
$htoAvailable["eyewear-owen-eyeglass-frame-owen-striped-tortoise"] = "TRUE";


$product["eyewear-pierce-eyeglass-frame-black"] = [["Pierce Revolver Black"],["Pierce Greystone", "eyewear-pierce-eyeglass-frame-greustone"],["Pierce Oakwood Brown", "eyewear-pierce-eyeglass-frame-brown"],["Felton Revolver Black", "eyewear-felton-eyeglass-frame-black"],["Wiloughby Checkered Revolver", "eyewear-wiloughby-eyeglass-frame-brights"],["Wiloughby Tennessee Whiskey", "eyewear-wiloughby-eyeglass-frame-dark-tortoise-crystal-on-bottom"]];
$htoAvailable["eyewear-pierce-eyeglass-frame-black"] = "TRUE";


$product["eyewear-pierce-eyeglass-frame-greustone"] = [["Pierce Greystone"],["Pierce Revolver Black", "eyewear-pierce-eyeglass-frame-black"],["Pierce Oakwood Brown", "eyewear-pierce-eyeglass-frame-brown"],["Felton Striped Maple", "eyewear-felton-eyeglass-frame-striped-maple"],["Felton Revolver Black", "eyewear-felton-eyeglass-frame-black"],["Wiloughby Striped Chestnut", "eyewear-wiloughby-eyeglass-frame-striped-tortoise"]];
$htoAvailable["eyewear-pierce-eyeglass-frame-greustone"] = "FALSE";


$product["eyewear-pierce-eyeglass-frame-brown"] = [["Pierce Oakwood Brown"],["Pierce Greystone", "eyewear-pierce-eyeglass-frame-greustone"],["Pierce Revolver Black", "eyewear-pierce-eyeglass-frame-black"],["Felton Striped Maple", "eyewear-felton-eyeglass-frame-striped-maple"],["Felton Old Fashioned Fade", "eyewear-felton-eyeglass-frame-old-fashioned-fade"],["Wiloughby Striped Chestnut", "eyewear-wiloughby-eyeglass-frame-striped-tortoise"]];
$htoAvailable["eyewear-pierce-eyeglass-frame-brown"] = "FALSE";


$product["eyewear-preston-eyeglass-frame-dark-tortoise"] = [["Preston Whiskey Tortoise"],["Preston Sandalwood Matte", "eyewear-preston-eyeglass-frame-light-tortoise"],["Miles Amber", "eyewear-miles-eyeglass-frame-amber-tortoise"],["Miles Revolver Black", "eyewear-miles-eyeglass-frame-black"],["Miles Sandalwood Matte", "eyewear-miles-eyeglass-frame-light-tortoise"],["Sinclair Burgundy Fade", "eyewear-sinclair-eyeglass-frame-burgundy"]];
$htoAvailable["eyewear-preston-eyeglass-frame-dark-tortoise"] = "TRUE";


$product["eyewear-preston-eyeglass-frame-light-tortoise"] = [["Preston Sandalwood Matte"],["Preston Whiskey Tortoise", "eyewear-preston-eyeglass-frame-dark-tortoise"],["Miles Sandalwood Matte", "eyewear-miles-eyeglass-frame-light-tortoise"],["Miles Amber", "eyewear-miles-eyeglass-frame-amber-tortoise"],["Sinclair Burgundy Fade", "eyewear-sinclair-eyeglass-frame-burgundy"],["Sinclair Greystone", "eyewear-sinclair-eyeglass-frame-greystone"]];
$htoAvailable["eyewear-preston-eyeglass-frame-light-tortoise"] = "TRUE";


$product["eyewear-reece-eyeglass-frame-dark-tortoise"] = [["Reece Whiskey Tortoise"],["Japhy Sandalwood Matte", "eyewear-japhy-eyeglass-frame-light-tortoise"],["Reece Midnight Blue", "eyewear-reece-eyeglass-frame-blue"],["Sibley Whiskey Tortoise Matte", "eyewear-sibley-eyeglass-frame-dark-tortoise"],["Sibley Amber", "eyewear-sibley-eyeglass-frame-amber-tortoise"],["Nedwin Amber", "eyewear-nedwin-eyeglass-frame-amber-tortoise"]];
$htoAvailable["eyewear-reece-eyeglass-frame-dark-tortoise"] = "TRUE";


$product["eyewear-reece-eyeglass-frame-blue"] = [["Reece Midnight Blue"],["Reece Whiskey Tortoise", "eyewear-reece-eyeglass-frame-dark-tortoise"],["Japhy Sandalwood Matte", "eyewear-japhy-eyeglass-frame-light-tortoise"],["Sibley Amber", "eyewear-sibley-eyeglass-frame-amber-tortoise"],["Nedwin Revolver Black Crystal", "eyewear-nedwin-eyeglass-frame-black"],["Nedwin Amber", "eyewear-nedwin-eyeglass-frame-amber-tortoise"]];
$htoAvailable["eyewear-reece-eyeglass-frame-blue"] = "TRUE";


$product["eyewear-roosevelt-eyeglass-frame-black"] = [["Roosevelt Revolver Black Matte"],["Roosevelt Striped Chestnut", "eyewear-roosevelt-eyeglass-frame-striped-tortoise"],["Roosevelt Bondi Blue", "eyewear-roosevelt-eyeglass-frame-brights"],["Crosby Revolver Black", "eyewear-crosby-eyeglass-frame-black"],["Crosby Greystone", "eyewear-crosby-eyeglass-frame-graystone"],["Thatcher Revolver Black", "eyewear-thatcher-eyeglass-frame-black"]];
$htoAvailable["eyewear-roosevelt-eyeglass-frame-black"] = "TRUE";


$product["eyewear-roosevelt-eyeglass-frame-striped-tortoise"] = [["Roosevelt Striped Chestnut"],["Roosevelt Revolver Black Matte", "eyewear-roosevelt-eyeglass-frame-black"],["Roosevelt Bondi Blue", "eyewear-roosevelt-eyeglass-frame-brights"],["Crosby Burgundy Fade", "eyewear-crosby-eyeglass-frame-burgundy"],["Preston Whiskey Tortoise", "eyewear-preston-eyeglass-frame-dark-tortoise"],["Preston Sandalwood Matte", "eyewear-preston-eyeglass-frame-light-tortoise"]];
$htoAvailable["eyewear-roosevelt-eyeglass-frame-striped-tortoise"] = "TRUE";


$product["eyewear-roosevelt-eyeglass-frame-brights"] = [["Roosevelt Bondi Blue"],["Roosevelt Revolver Black Matte", "eyewear-roosevelt-eyeglass-frame-black"],["Roosevelt Striped Chestnut", "eyewear-roosevelt-eyeglass-frame-striped-tortoise"],["Crosby Revolver Black", "eyewear-crosby-eyeglass-frame-black"],["Thatcher Whiskey Tortoise", "eyewear-thatcher-eyeglass-frame-dark-tortoise"],["Thatcher Revolver Black", "eyewear-thatcher-eyeglass-frame-black"]];
$htoAvailable["eyewear-roosevelt-eyeglass-frame-brights"] = "TRUE";


$product["eyewear-sibley-eyeglass-frame-black"] = [["Sibley Revolver Black"],["Sibley Amber", "eyewear-sibley-eyeglass-frame-amber-tortoise"],["Sibley Whiskey Tortoise Matte", "eyewear-sibley-eyeglass-frame-dark-tortoise"],["Langston Revolver Black Crystal", "eyewear-langston-eyeglass-frame-black"],["Langston Whiskey Tortoise Matte", "eyewear-langston-eyeglass-frame-dark-tortoise"],["Reece Midnight Blue", "eyewear-reece-eyeglass-frame-blue"]];
$htoAvailable["eyewear-sibley-eyeglass-frame-black"] = "TRUE";


$product["eyewear-sibley-eyeglass-frame-dark-tortoise"] = [["Sibley Whiskey Tortoise Matte"],["Sibley Amber", "eyewear-sibley-eyeglass-frame-amber-tortoise"],["Sibley Revolver Black", "eyewear-sibley-eyeglass-frame-black"],["Langston Whiskey Tortoise Matte", "eyewear-langston-eyeglass-frame-dark-tortoise"],["Langston Amber", "eyewear-langston-eyeglass-frame-amber-tortoise"],["Reece Whiskey Tortoise", "eyewear-reece-eyeglass-frame-dark-tortoise"]];
$htoAvailable["eyewear-sibley-eyeglass-frame-dark-tortoise"] = "TRUE";


$product["eyewear-sibley-eyeglass-frame-amber-tortoise"] = [["Sibley Amber"],["Sibley Whiskey Tortoise Matte", "eyewear-sibley-eyeglass-frame-dark-tortoise"],["Sibley Revolver Black", "eyewear-sibley-eyeglass-frame-black"],["Langston Amber", "eyewear-langston-eyeglass-frame-amber-tortoise"],["Langston Whiskey Tortoise Matte", "eyewear-langston-eyeglass-frame-dark-tortoise"],["Reece Whiskey Tortoise", "eyewear-reece-eyeglass-frame-dark-tortoise"]];
$htoAvailable["eyewear-sibley-eyeglass-frame-amber-tortoise"] = "TRUE";


$product["eyewear-sinclair-eyeglass-frame-greystone"] = [["Sinclair Greystone"],["Sinclair Midnight Blue", "eyewear-sinclair-eyeglass-frame-blue"],["Sinclair Burgundy Fade", "eyewear-sinclair-eyeglass-frame-burgundy"],["Miles Revolver Black", "eyewear-miles-eyeglass-frame-black"],["Miles Amber", "eyewear-miles-eyeglass-frame-amber-tortoise"],["Preston Whiskey Tortoise", "eyewear-preston-eyeglass-frame-dark-tortoise"]];
$htoAvailable["eyewear-sinclair-eyeglass-frame-greystone"] = "TRUE";


$product["eyewear-sinclair-eyeglass-frame-burgundy"] = [["Sinclair Burgundy Fade"],["Sinclair Midnight Blue", "eyewear-sinclair-eyeglass-frame-blue"],["Sinclair Greystone", "eyewear-sinclair-eyeglass-frame-greystone"],["Miles Amber", "eyewear-miles-eyeglass-frame-amber-tortoise"],["Preston Whiskey Tortoise", "eyewear-preston-eyeglass-frame-dark-tortoise"],["Miles Sandalwood Matte", "eyewear-miles-eyeglass-frame-light-tortoise"]];
$htoAvailable["eyewear-sinclair-eyeglass-frame-burgundy"] = "TRUE";


$product["eyewear-sinclair-eyeglass-frame-blue"] = [["Sinclair Midnight Blue"],["Sinclair Greystone", "eyewear-sinclair-eyeglass-frame-greystone"],["Sinclair Burgundy Fade", "eyewear-sinclair-eyeglass-frame-burgundy"],["Miles Revolver Black", "eyewear-miles-eyeglass-frame-black"],["Preston Whiskey Tortoise", "eyewear-preston-eyeglass-frame-dark-tortoise"],["Thatcher Revolver Black", "eyewear-thatcher-eyeglass-frame-black"]];
$htoAvailable["eyewear-sinclair-eyeglass-frame-blue"] = "TRUE";


$product["eyewear-tenley-eyeglass-frame-burgundy-fade"] = [["Tenley Burgundy Fade"],["Tenley Midnight Blue", "eyewear-tenley-eyeglass-frame-blue"],["Sinclair Burgundy Fade", "eyewear-sinclair-eyeglass-frame-burgundy"],["Sinclair Midnight Blue", "eyewear-sinclair-eyeglass-frame-blue"],["Thatcher Whiskey Tortoise", "eyewear-thatcher-eyeglass-frame-dark-tortoise"],["Preston Whiskey Tortoise", "eyewear-preston-eyeglass-frame-dark-tortoise"]];
$htoAvailable["eyewear-tenley-eyeglass-frame-burgundy-fade"] = "TRUE";


$product["eyewear-tenley-eyeglass-frame-blue"] = [["Tenley Midnight Blue"],["Tenley Burgundy Fade", "eyewear-tenley-eyeglass-frame-burgundy-fade"],["Sinclair Midnight Blue", "eyewear-sinclair-eyeglass-frame-blue"],["Sinclair Burgundy Fade", "eyewear-sinclair-eyeglass-frame-burgundy"],["Thatcher Revolver Black", "eyewear-thatcher-eyeglass-frame-black"],["Preston Whiskey Tortoise", "eyewear-preston-eyeglass-frame-dark-tortoise"]];
$htoAvailable["eyewear-tenley-eyeglass-frame-blue"] = "TRUE";


$product["eyewear-thatcher-eyeglass-frame-black"] = [["Thatcher Revolver Black"],["Thatcher Whiskey Tortoise", "eyewear-thatcher-eyeglass-frame-dark-tortoise"],["Crosby Revolver Black", "eyewear-crosby-eyeglass-frame-black"],["Crosby Greystone", "eyewear-crosby-eyeglass-frame-graystone"],["Roosevelt Revolver Black Matte", "eyewear-roosevelt-eyeglass-frame-black"],["Griffin Revolver Black", "eyewear-griffin-eyeglass-frame-black"]];
$htoAvailable["eyewear-thatcher-eyeglass-frame-black"] = "TRUE";


$product["eyewear-thatcher-eyeglass-frame-dark-tortoise"] = [["Thatcher Whiskey Tortoise"],["Thatcher Revolver Black", "eyewear-thatcher-eyeglass-frame-black"],["Crosby Burgundy Fade", "eyewear-crosby-eyeglass-frame-burgundy"],["Crosby Revolver Black", "eyewear-crosby-eyeglass-frame-black"],["Roosevelt Striped Chestnut", "eyewear-roosevelt-eyeglass-frame-striped-tortoise"],["Griffin Greystone", "eyewear-griffin-eyeglass-frame-grey"]];
$htoAvailable["eyewear-thatcher-eyeglass-frame-dark-tortoise"] = "TRUE";


$product["eyewear-thompson-eyeglass-frame-black"] = [["Thompson Revolver Black"],["Thompson Whiskey Tortoise", "eyewear-thompson-eyeglass-frame-dark-tortoise"],["Thompson Crystal Matte", "eyewear-thompson-eyeglass-frame-clear"],["Langston Revolver Black Crystal", "eyewear-langston-eyeglass-frame-black"],["Japhy Revolver Black Crystal", "eyewear-japhy-eyeglass-frame-black"],["Langston Whiskey Tortoise Matte", "eyewear-langston-eyeglass-frame-dark-tortoise"]];
$htoAvailable["eyewear-thompson-eyeglass-frame-black"] = "FALSE";


$product["eyewear-thompson-eyeglass-frame-dark-tortoise"] = [["Thompson Whiskey Tortoise"],["Thompson Revolver Black", "eyewear-thompson-eyeglass-frame-black"],["Thompson Crystal Matte", "eyewear-thompson-eyeglass-frame-clear"],["Langston Whiskey Tortoise Matte", "eyewear-langston-eyeglass-frame-dark-tortoise"],["Japhy Whiskey Tortoise", "eyewear-japhy-eyeglass-frame-dark-tortoise"],["Langston Revolver Black Crystal", "eyewear-langston-eyeglass-frame-black"]];
$htoAvailable["eyewear-thompson-eyeglass-frame-dark-tortoise"] = "FALSE";


$product["eyewear-thompson-eyeglass-frame-clear"] = [["Thompson Crystal Matte"],["Thompson Revolver Black", "eyewear-thompson-eyeglass-frame-black"],["Thompson Whiskey Tortoise", "eyewear-thompson-eyeglass-frame-dark-tortoise"],["Japhy Crystal Matte", "eyewear-japhy-eyeglass-frame-clear"],["Langston Amber", "eyewear-langston-eyeglass-frame-amber-tortoise"],["Japhy Sandalwood Matte", "eyewear-japhy-eyeglass-frame-light-tortoise"]];
$htoAvailable["eyewear-thompson-eyeglass-frame-clear"] = "FALSE";


$product["eyewear-webb-eyeglass-frame-black"] = [["Webb Revolver Black Crystal"],["Webb Amber", "eyewear-webb-eyeglass-frame-amber-tortoise"],["Webb Whiskey Tortoise Matte", "eyewear-webb-eyeglass-frame-dark-tortoise"],["Webb Crystal Matte", "eyewear-webb-eyeglass-frame-clear"],["Miles Revolver Black", "eyewear-miles-eyeglass-frame-black"],["Miles Amber", "eyewear-miles-eyeglass-frame-amber-tortoise"]];
$htoAvailable["eyewear-webb-eyeglass-frame-black"] = "TRUE";


$product["eyewear-webb-eyeglass-frame-dark-tortoise"] = [["Webb Whiskey Tortoise Matte"],["Webb Amber", "eyewear-webb-eyeglass-frame-amber-tortoise"],["Webb Revolver Black Crystal", "eyewear-webb-eyeglass-frame-black"],["Webb Crystal Matte", "eyewear-webb-eyeglass-frame-clear"],["Miles Amber", "eyewear-miles-eyeglass-frame-amber-tortoise"],["Miles Sandalwood Matte", "eyewear-miles-eyeglass-frame-light-tortoise"]];
$htoAvailable["eyewear-webb-eyeglass-frame-dark-tortoise"] = "TRUE";


$product["eyewear-webb-eyeglass-frame-amber-tortoise"] = [["Webb Amber"],["Webb Revolver Black Crystal", "eyewear-webb-eyeglass-frame-black"],["Webb Whiskey Tortoise Matte", "eyewear-webb-eyeglass-frame-dark-tortoise"],["Webb Crystal Matte", "eyewear-webb-eyeglass-frame-clear"],["Miles Amber", "eyewear-miles-eyeglass-frame-amber-tortoise"],["Miles Sandalwood Matte", "eyewear-miles-eyeglass-frame-light-tortoise"]];
$htoAvailable["eyewear-webb-eyeglass-frame-amber-tortoise"] = "TRUE";


$product["eyewear-webb-eyeglass-frame-clear"] = [["Webb Crystal Matte"],["Webb Whiskey Tortoise Matte", "eyewear-webb-eyeglass-frame-dark-tortoise"],["Webb Amber", "eyewear-webb-eyeglass-frame-amber-tortoise"],["Webb Revolver Black Crystal", "eyewear-webb-eyeglass-frame-black"],["Colton Sandalwood Matte", "eyewear-colton-eyeglass-frame-light-tortoise"],["Miles Sandalwood Matte", "eyewear-miles-eyeglass-frame-light-tortoise"]];
$htoAvailable["eyewear-webb-eyeglass-frame-clear"] = "TRUE";


$product["eyewear-wiloughby-eyeglass-frame-dark-tortoise-crystal-on-bottom"] = [["Wiloughby Tennessee Whiskey"],["Wiloughby Striped Chestnut", "eyewear-wiloughby-eyeglass-frame-striped-tortoise"],["Wiloughby Checkered Revolver", "eyewear-wiloughby-eyeglass-frame-brights"],["Digby Whiskey Tortoise Matte", "eyewear-digby-eyeglass-frame-dark-tortoise"],["Digby Striped Chestnut", "eyewear-digby-eyeglass-frame-striped-tortoise"],["Digby Tennessee Whiskey", "eyewear-digby-eyeglass-frame-dark-tortoise-crystal-on-bottom"]];
$htoAvailable["eyewear-wiloughby-eyeglass-frame-dark-tortoise-crystal-on-bottom"] = "TRUE";


$product["eyewear-wiloughby-eyeglass-frame-striped-tortoise"] = [["Wiloughby Striped Chestnut"],["Wiloughby Tennessee Whiskey", "eyewear-wiloughby-eyeglass-frame-dark-tortoise-crystal-on-bottom"],["Wiloughby Checkered Revolver", "eyewear-wiloughby-eyeglass-frame-brights"],["Digby Tennessee Whiskey", "eyewear-digby-eyeglass-frame-dark-tortoise-crystal-on-bottom"],["Digby Striped Chestnut", "eyewear-digby-eyeglass-frame-striped-tortoise"],["Digby Whiskey Tortoise Matte", "eyewear-digby-eyeglass-frame-dark-tortoise"]];
$htoAvailable["eyewear-wiloughby-eyeglass-frame-striped-tortoise"] = "TRUE";


$product["eyewear-wiloughby-eyeglass-frame-brights"] = [["Wiloughby Checkered Revolver"],["Wiloughby Striped Chestnut", "eyewear-wiloughby-eyeglass-frame-striped-tortoise"],["Wiloughby Tennessee Whiskey", "eyewear-wiloughby-eyeglass-frame-dark-tortoise-crystal-on-bottom"],["Digby Striped Chestnut", "eyewear-digby-eyeglass-frame-striped-tortoise"],["Digby Whiskey Tortoise Matte", "eyewear-digby-eyeglass-frame-dark-tortoise"],["Digby Tennessee Whiskey", "eyewear-digby-eyeglass-frame-dark-tortoise-crystal-on-bottom"]];
$htoAvailable["eyewear-wiloughby-eyeglass-frame-brights"] = "TRUE";


$product["eyewear-winston-eyeglass-frame-black"] = [["Winston Revolver Black"],["Winston Lunar Fade", "eyewear-winston-eyeglass-frame-dark-moon-fade"],["Winston Old Fashioned Fade", "eyewear-winston-eyeglass-frame-old-fashioned-fade"],["Owen Revolver Black Matte", "eyewear-owen-eyeglass-frame-black-matte"],["Huxley Revolver Black", "eyewear-huxley-eyeglass-frame-black"],["Huxley Whiskey Tortoise", "eyewear-huxley-eyeglass-frame-dark-tortoise"]];
$htoAvailable["eyewear-winston-eyeglass-frame-black"] = "TRUE";


$product["eyewear-winston-eyeglass-frame-dark-moon-fade"] = [["Winston Lunar Fade"],["Winston Old Fashioned Fade", "eyewear-winston-eyeglass-frame-old-fashioned-fade"],["Winston Revolver Black", "eyewear-winston-eyeglass-frame-black"],["Owen Revolver Black Matte", "eyewear-owen-eyeglass-frame-black-matte"],["Owen Striped Chestnut", "eyewear-owen-eyeglass-frame-owen-striped-tortoise"],["Huxley Revolver Black", "eyewear-huxley-eyeglass-frame-black"]];
$htoAvailable["eyewear-winston-eyeglass-frame-dark-moon-fade"] = "TRUE";


$product["eyewear-winston-eyeglass-frame-old-fashioned-fade"] = [["Winston Old Fashioned Fade"],["Winston Lunar Fade", "eyewear-winston-eyeglass-frame-dark-moon-fade"],["Winston Revolver Black", "eyewear-winston-eyeglass-frame-black"],["Owen Striped Chestnut", "eyewear-owen-eyeglass-frame-owen-striped-tortoise"],["Huxley Whiskey Tortoise", "eyewear-huxley-eyeglass-frame-dark-tortoise"],["Huxley Tennessee Whiskey", "eyewear-huxley-eyeglass-frame-dark-tortoise-crystal-on-bottom"]];
$htoAvailable["eyewear-winston-eyeglass-frame-old-fashioned-fade"] = "TRUE";


$product["eyewear-zagg-eyeglass-frame-black"] = [["Zagg Revolver Black Matte"],["Zagg Striped Chestnut", "eyewear-zagg-eyeglass-frame-striped-tortoise"],["Zagg Tennessee Whiskey", "eyewear-zagg-eyeglass-frame-dark-tortoise-crystal-on-bottom"],["Webb Revolver Black Crystal", "eyewear-webb-eyeglass-frame-black"],["Webb Amber", "eyewear-webb-eyeglass-frame-amber-tortoise"],["Webb Whiskey Tortoise Matte", "eyewear-webb-eyeglass-frame-dark-tortoise"]];
$htoAvailable["eyewear-zagg-eyeglass-frame-black"] = "TRUE";


$product["eyewear-zagg-eyeglass-frame-dark-tortoise-crystal-on-bottom"] = [["Zagg Tennessee Whiskey"],["Zagg Striped Chestnut", "eyewear-zagg-eyeglass-frame-striped-tortoise"],["Zagg Revolver Black Matte", "eyewear-zagg-eyeglass-frame-black"],["Webb Whiskey Tortoise Matte", "eyewear-webb-eyeglass-frame-dark-tortoise"],["Webb Amber", "eyewear-webb-eyeglass-frame-amber-tortoise"],["Finn Amber", "eyewear-finn-eyeglass-frame-amber-tortoise"]];
$htoAvailable["eyewear-zagg-eyeglass-frame-dark-tortoise-crystal-on-bottom"] = "TRUE";


$product["eyewear-zagg-eyeglass-frame-striped-tortoise"] = [["Zagg Striped Chestnut"],["Zagg Tennessee Whiskey", "eyewear-zagg-eyeglass-frame-dark-tortoise-crystal-on-bottom"],["Zagg Revolver Black Matte", "eyewear-zagg-eyeglass-frame-black"],["Webb Amber", "eyewear-webb-eyeglass-frame-amber-tortoise"],["Webb Whiskey Tortoise Matte", "eyewear-webb-eyeglass-frame-dark-tortoise"],["Finn Amber", "eyewear-finn-eyeglass-frame-amber-tortoise"]];
$htoAvailable["eyewear-zagg-eyeglass-frame-striped-tortoise"] = "TRUE";

//To get a products alternatives do 
//alert($product['Beckett Revolver Black Matte'][0][1]);

});
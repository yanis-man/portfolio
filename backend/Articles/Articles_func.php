<?php 

use Database;
    class ArticleController implements Database
    {
        function __constructor()
        {
            $this->DB = new Database();
        }

        public function getLast4Artices()
        {
            $sql = "SELECT * FROM articles ORDER BY created ASC LIMIT 4";
            $result = $this->DB->pull($sql);
        }
    }

?>
<?php 
abstract class Database 
{
    private $bdd;

    public function __construct() 
    {

        try {
            $this->bdd = new PDO('mysql:host=localhost;dbname=superreminder;charset=utf8', 'root', '');
            $this->bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo 'Connexion échouée : ' . $e->getMessage();
        }
    }
    public function getBdd(): PDO
    {
        return $this->bdd;
    }
}
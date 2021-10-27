<?php
class home extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->food(['url','form']);
    }
    public function psc()
    {
        $data=$this->input->post('search');
        echo $data;
    }
}
?>
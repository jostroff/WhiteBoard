using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WhiteBoard.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;



namespace WhiteBoard.Controllers
{
    [ApiController]
    public class CanvasController : ControllerBase
    {

        public static int counter = 0;

        [HttpGet("canvas/all")]
        public ActionResult<List<Canvas>> GetAllCanvas()
        {
            
            using (var db = new WhiteBoardContext())
            {
                var canvaslist = db.CanvasList.ToList<Canvas>();
                
                return canvaslist;
            }
        }

        [HttpGet("canvas/add/{content}")]
        public ActionResult<List<Canvas>> GetAllCanvas(string content)
        {
            
            using (var db = new WhiteBoardContext())
            {

                Canvas canv = new Canvas();
                canv.serialnum = "#"+counter;
                counter++;

                canv.canvascontent = content;
                canv.title = "---"+counter+"---";

                db.CanvasList.Add(canv);
                db.SaveChanges();


                var canvaslist = db.CanvasList.ToList<Canvas>();
                
                return canvaslist;
            }
        }


        [HttpGet("canvas/create/{canvasName}")]
        public ActionResult<List<Canvas>> CreateEmptyCanvas(string canvasName)
        {
            
            using (var db = new WhiteBoardContext())
            {

                Canvas canv = new Canvas();
                canv.serialnum = "#Canvas_Created_at_"+DateTime.Now.ToString("yy:MM:dd:HH:mm:ss");


                canv.canvascontent = "";
                canv.title = canvasName;

                db.CanvasList.Add(canv);
                db.SaveChanges();


                var canvaslist = db.CanvasList.ToList<Canvas>();
                
                return canvaslist;
            }
        }

        [HttpGet("canvas/get/{title}")]
        public ActionResult<String> getContentByTitle(string title)
        {
            using (var db = new WhiteBoardContext())
            {
                DbSet<Canvas> dbset = db.CanvasList;
                var mylist = dbset.ToList<Canvas>();

                var lst = dbset.Where(a => a.title == title);

                var mlst = lst.ToList<Canvas>();

                var cvs = mlst[0];

                

                return cvs.canvascontent;
            }
        }

        [HttpGet("canvas/update/{title}/{content}")]
        public ActionResult<string> updateCanvas(string title, string content)
        {
            using (var db = new WhiteBoardContext())
            {
                DbSet<Canvas> dbset = db.CanvasList;
                var mylist = dbset.ToList<Canvas>();

                var lst = dbset.Where(a => a.title == title);
                  
                
                var mlst = lst.ToList<Canvas>();

                if(mlst.Count>0){
                    var cvs = mlst[0];

                    cvs.canvascontent = content;

                    db.CanvasList.Update(cvs);

                    db.SaveChanges();
                    return "updated.";
                }else{

                    Canvas canv = new Canvas();
                    canv.serialnum = "#Canvas_Created_at_"+DateTime.Now.ToString("yy:MM:dd:HH:mm:ss");
                    canv.canvascontent = content;
                    canv.title = title;

                    db.CanvasList.Add(canv);
                    db.SaveChanges();

                    return "Added and updated.";
                }
            }


        }


        [HttpGet("canvas/alltitle")]
        public ActionResult<String> getAllTitle()
        {
            using (var db = new WhiteBoardContext())
            {
                DbSet<Canvas> dbset = db.CanvasList;
                var mylist = dbset.ToList<Canvas>();
                var lst = dbset.Where(a => a.title != "-");
                var mlst = lst.ToList<Canvas>();
                var res = "";
                for(var i = 0;i<mlst.Count;i++){
                    res += mlst[i].title+"+";
                }
                return res;
            }
        }





        [HttpGet("canvas/updatebytitle/{title}/{content}")]
        public ActionResult<string> updateContentByTitle(string title, string content)
        {
            return null;
        }

        [HttpGet("canvas/{title}")]
        // public ActionResult<Canvas> GetCanvasById(string title){
        public void GetCanvasById(string title){
            


            // using (var db = new WhiteBoardContext())
            // {
            //     DbSet<Canvas> clst = db.CanvasList;


            //     // db.CanvasList.Where(a => a.serialnum == serialnum).First();
            //     var list = clst.ToList<Canvas>();
            //     //db.CanvasList.Where(a => a.serialnum == id).First();
            //     if(list.Count>0){
            //         return clst.Where(a => a.serialnum == serialnum).First();
            //     }else{
                    // return new Canvas();
                // }
                
            // }
        }

        [HttpGet("canvas/deleteall")]
        public ActionResult<List<Canvas>> clearAll()
        {
            
            using (var db = new WhiteBoardContext())
            {


                foreach (var entity in db.CanvasList)
                db.CanvasList.Remove(entity);

                db.SaveChanges();



                var canvaslist = db.CanvasList.ToList<Canvas>();
                
                return canvaslist;
            }
        }















    }

}

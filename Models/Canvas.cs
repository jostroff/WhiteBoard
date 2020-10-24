using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WhiteBoard.Models


{
    public class WhiteBoardContext : DbContext
    {

        public WhiteBoardContext(){
            
        }

        public WhiteBoardContext(DbContextOptions<WhiteBoardContext> options)
            : base(options)
        { }
        
        public DbSet<Canvas> CanvasList { get; set; }
        

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=Canvas.db");
        }



        
    }

    

    public class Canvas
    {

        public Canvas(){
            serialnum = "Not Exist";
            canvascontent = "the database is empty";
            title = "No title";
        }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        
        [Key]
        public string serialnum { get; set; }
        
        public string canvascontent { get; set; }
        
        public string title { get; set; }

        
    }

}
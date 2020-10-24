﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WhiteBoard.Models;

namespace WebApp1.Migrations
{
    [DbContext(typeof(WhiteBoardContext))]
    partial class WhiteBoardContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.3-servicing-35854");

            modelBuilder.Entity("WhiteBoard.Models.Canvas", b =>
                {
                    b.Property<string>("serialnum")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("canvascontent");

                    b.Property<string>("title");

                    b.HasKey("serialnum");

                    b.ToTable("CanvasList");
                });
#pragma warning restore 612, 618
        }
    }
}

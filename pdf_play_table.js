let opportunities;
let tactics = [];
let practices = [];
let frequencies = [];
var factivities = [];
let logo_base64Img = "data:image/jpeg;base64,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";

function loadData() {
    $('.ui.accordion').accordion();

    // Dummy to create Opportunities table
    // Min 
    opportunities = faker.random.number({
        'min': 2,
        'max': 5
    });
    buildOpsTables(opportunities);

    // Dummy to create opportunities table
    buildFreqTables();
}
function buildOpsTables(opportunities) {

    for (var j = 1; j <= opportunities; j++) {

        var note = (j == 1 || j == 3) ? '<span class="ui orange ribbon label">Note:</span><span>' + faker.lorem.paragraph() + '</span>' : '';

        var x = '<div class="opcontainer"><div class="title opportunity' + j + '"><i class="arrow alternate circle right outline icon"></i>' +
            faker.lorem.paragraph() + '</div>' +
            '<div id="opportunity' + j + '" class="content">' + note + '</div></div>';

        $("#kpi_opscontainer").append(x);

        // GET TACTICS FROM EACH OBJECTIVE!!
        tactics.push({
            oid: j,
            id: 1,
            text: faker.random.number({
                'min': 1,
                'max': 5
            })
        });
        tactics.push({
            oid: j,
            id: 2,
            text: faker.random.number({
                'min': 6,
                'max': 10
            })
        });
        tactics.push({
            oid: j,
            id: 3,
            text: faker.random.number({
                'min': 6,
                'max': 10
            })
        });

    }

    tactics.forEach(function (tactic) {
        var t = '<table class="ui small fixed selectable table opportunity' + tactic.oid + '"" id="tactic' + tactic.id + '">' +
            '<thead><tr><th>Tactic: ' + tactic.text + '<br/><small>{Practices Selected}</small></th></tr></thead>' +
            '<tbody></tbody></table>'

        $("#opportunity" + tactic.oid).append(t);

        // GET PRACTICES FROM EACH TACTIC!
        practices.push({
            tacticid: tactic.id,
            id: faker.random.number({
                'min': 1,
                'max': 2
            }),
            text: " * " + faker.lorem.paragraph()
        });


    });

    practices.forEach(function (practice) {
        var p = '<tr><td>' + practice.text + '</td></tr>';
        $("#tactic" + practice.tacticid + "> tbody").append(p);

    });

}


function buildFreqTables() {
    // Dummy to create opportunities table
    // SHOULD BE AN ARRAY OF ONE ELEMENT
    var frequencies = [];
    frequencies.push({
        id: 1,
        text: faker.lorem.paragraph()
    });

    var n = '<span class="ui orange ribbon label">Note:</span><span>' + faker.lorem.paragraph() + '</span>';
    $("#frequency").append(n);
    frequencies.forEach(function (frequency) {
        var t = '<table class="ui small fixed selectable table" id="factivity">' +
            '<thead><tr><th>Activity</th></tr></thead>' +
            '<tbody></tbody></table>'

        $("#frequency").append(t);


        factivities.push({
            fid: frequency.id,
            id: faker.random.number({
                'min': 1,
                'max': 4
            }),
            text: faker.lorem.paragraph()
        });
        factivities.push({
            fid: frequency.id,
            id: faker.random.number({
                'min': 1,
                'max': 4
            }),
            text: faker.lorem.paragraph()
        });
        factivities.push({
            fid: frequency.id,
            id: faker.random.number({
                'min': 1,
                'max': 4
            }),
            text: faker.lorem.paragraph()
        });

    });

    factivities.forEach(function (activity) {
        var a = '<tr><td><div class="ui ribbon label"><i class="dot circle outline icon"></i></div>' + activity.text + '</td></tr>';
        $("#factivity > tbody").append(a);
    });

}


document.getElementById('pdf').onclick = function () {
    var doc = new jsPDF({
        orientation: 'p',
        format: 'letter'
    });
    var height = doc.internal.pageSize.height;
    var totalPagesExp = "{total_pages_count_string}";
    var currentpage = 0;

    var footer = function (data) {
        //var str = "Page " + totalPagesExp;
        // Total page number plugin only available in jspdf v1.0+
        //if (typeof doc.putTotalPages === 'function') {
        if (currentpage < doc.internal.getNumberOfPages()) {
            str = totalPagesExp;
            // str = str + " of " + doc.internal.getNumberOfPages();
            currentpage = doc.internal.getNumberOfPages();
            doc.setFontSize(10);
            var pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
            doc.text(str, 200, pageHeight - 10); //data.settings.margin.left
        }


        //}


        /*if (currentpage < doc.internal.getNumberOfPages()) {

            doc.setFontSize(10);
            doc.setFontStyle('normal');
            var pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
            var str = "Page " + totalPagesExp;
            doc.text(str, 258, pageHeight  - 7);
            currentpage = doc.internal.getNumberOfPages();
        }*/
    };

    doc.setProperties({
        'title': 'DM Store Visit Opportunities Summary',
        'subject': 'Tactics / Best Practices',
        'author': 'Ivan Ramos <ivan.ramos@autozone.com>',
        'creator': 'Ivan Ramos <ivan.ramos@autozone.com>'
    });

    doc.setFont("helvetica");
    doc.setFontSize(17);
    doc.setTextColor(40);
    doc.setFontStyle('bold');
    doc.addImage(logo_base64Img, 'JPEG', 180, 5, 16, 16);
    doc.text("DM Store Visit Summary", 7, 10);
    doc.setFontStyle('normal');
    doc.setFontSize(11);
    doc.setTextColor(0);
    doc.text("Store # 1234 | Visit Date: 01/01/2018  |  Status: Completed", 7, 15);
    doc.text("Visit Objective: visit objective description .....", 7, 20);
    doc.setFontSize(15);
    doc.setTextColor(40);
    doc.setFontStyle('normal');
    doc.setDrawColor(0);
    doc.setFillColor(230, 230, 230);
    doc.setDrawColor(230, 230, 230);
    doc.rect(7, 24.5, 202, 10, 'FD'); // startx, starty,width,height
    doc.text("[ KPI Opportunities ]", 8, 31);
    doc.setFontSize(10);
    doc.setTextColor(0);
    /* ================================================================= */
    var starty;
    var flag = 0;

    var opportunities = 2;

    var opColumns = [{
        title: "Dummy",
        dataKey: "dummy"
    }];
    for (var i = 1; i <= opportunities; i++) {
        var opData = [];
        var opTitle = $("div.title.opportunity" + i).text();
        starty = (i == 1) ? 38.7 : doc.autoTable.previous.finalY + 11.5;
        doc.setFontStyle('bold');
        var note = (i == 1 || i == 3) ? faker.lorem.paragraph() : null;

        opData.push({
            dummy: opTitle
        });
        if (note != null) opData.push({
            dummy: note
        });

        doc.autoTable(opColumns, opData, {
            addPageContent: footer,
            showHeader: 'never',
            theme: 'grid',
            startY: starty,
            margin: {
                horizontal: 7
            },
            bodyStyles: {
                valign: 'top'
            },
            styles: {
                overflow: 'linebreak',
                columnWidth: 'wrap'
            },
            columnStyles: {
                dummy: {
                    columnWidth: 'auto',
                    fontStyle: 'bold',
                    fontSize: 12
                }
            },
            alternateRowStyles: {
                fillColor: [208, 224, 241],
                textColor: 0
            },
            createdCell: function (cell, opts) {
                if (opts.row.index == 1)
                    cell.styles.fontStyle = 'normal';
            }
        });
        if (typeof doc.putTotalPages === 'function')
            doc.putTotalPages(totalPagesExp);

        doc.setFontStyle('normal');


        $("table.opportunity" + i).each(function () {

            var ops = doc.autoTableHtmlToJson(this);

            doc.autoTable(ops.columns, ops.data, {
                addPageContent: footer,
                theme: 'grid',
                headerStyles: {
                    fillColor: [240, 240, 240],
                    textColor: 0
                },
                startY: doc.autoTable.previous.finalY + 1,
                margin: {
                    horizontal: 7
                },
                styles: {
                    overflow: 'linebreak',
                    columnWidth: 'wrap'
                },
                columnStyles: {
                    0: {
                        columnWidth: 'auto'
                    }
                }
            });
            //starty = doc.autoTable.previous.finalY;
            // Total page number plugin only available in jspdf v1.0+
            if (typeof doc.putTotalPages === 'function')
                doc.putTotalPages(totalPagesExp);

        });

    }


    // FREQ ACTIVITIES TABLE
    doc.addPage();

    doc.setFont("helvetica");
    doc.setFontSize(15);
    doc.setTextColor(40);
    doc.setFontStyle('normal');
    doc.setDrawColor(0);
    doc.setFillColor(230, 230, 230);
    doc.setDrawColor(230, 230, 230);
    doc.rect(7, 10.5, 202, 10, 'FD'); // startx, starty,width,height            
    doc.text("[Period and Quartely Activities]", 8, 17);

    doc.setFontSize(10);
    doc.setTextColor(0);

    var fColumns = [{
        title: "Dummy",
        dataKey: "dummy"
    }];
    var fData = [];
    var note = "NOTE: " + faker.lorem.paragraph(); // : null;


    if (note != null) {
        fData.push({
            dummy: note
        });

        doc.autoTable(fColumns, fData, {
            addPageContent: footer,
            showHeader: 'never',
            theme: 'grid',
            startY: 21,
            margin: {
                horizontal: 7
            },
            styles: {
                overflow: 'linebreak',
                columnWidth: 'wrap'
            },
            columnStyles: {
                dummy: {
                    columnWidth: 'auto',
                    fontStyle: 'bold'
                }
            }
        });

        if (typeof doc.putTotalPages === 'function')
            doc.putTotalPages(totalPagesExp);

    }

    var startyf = (note == null) ? 21 : doc.autoTable.previous.finalY + 1;
    var fre = doc.autoTableHtmlToJson(document.getElementById('factivity'));

    doc.autoTable(fre.columns, fre.data, {
        addPageContent: footer,
        theme: 'grid',
        headerStyles: {
            fillColor: [240, 240, 240],
            textColor: 0
        },
        startY: startyf,
        margin: {
            horizontal: 7
        },
        styles: {
            overflow: 'linebreak',
            columnWidth: 'wrap'
        },
        columnStyles: {
            0: {
                columnWidth: 'auto'
            }
        }
    });


    // Total page number plugin only available in jspdf v1.0+
    if (typeof doc.putTotalPages === 'function') {
        doc.putTotalPages(totalPagesExp);
    }


    //doc.addPage();
    doc.setFontSize(10);
    doc.setTextColor(0);

    var nts = doc.autoTableHtmlToJson(document.getElementById('visitNotes'));
    doc.autoTable(nts.columns, nts.data, {
        addPageContent: footer,
        theme: 'grid',
        headerStyles: {
            fillColor: [240, 240, 240],
            textColor: 0
        },
        startY: doc.autoTable.previous.finalY + 10, // 15,  -> if addPage is enabled
        margin: {
            horizontal: 7
        },
        styles: {
            overflow: 'linebreak',
            columnWidth: 'wrap'
        },
        columnStyles: {
            0: {
                columnWidth: 'auto'
            }
        }
    });


    // Total page number plugin only available in jspdf v1.0+
    if (typeof doc.putTotalPages === 'function')
        doc.putTotalPages(totalPagesExp);



    // Add lines for sifgnatures
    var y1 = doc.autoTable.previous.finalY + 50;
    var y2 = doc.autoTable.previous.finalY + 55.5;
    doc.setLineWidth(0.5);
    doc.setDrawColor(39, 40, 34);
    // doc.line(7 , y1, 60, y1); // x,y,w,h
    // doc.line(80 , y1, 133, y1); // x,y,w,h
    // doc.line(153 , y1, 206, y1); // x,y,w,h
    doc.setFontSize(13);
    // doc.text("DM", 28, y2);
    // doc.text("SM", 103, y2);
    // doc.text("Date", 175, y2);    
    doc.text("Store Visit Completed On", 7, y1);
    doc.setFontType("bold");
    doc.text("January, 11 2019 by Clifton Brown", 60, y1);
    //doc.line(60, y1+3, 170, y1+3); // x,y,w,h
    doc.setFontType("normal");
    doc.text("Feedback Received", 7, y1 + 40);
    doc.line(50, y1 + 43, 140, y1 + 43); // x,y,w,h

    var smSignature = "";
    if (smSignature != '') doc.addImage(smSignature, 'JPEG', 50, y1 + 7, 100, 35); // image,format,x,y,width,height


    doc.save('table.pdf');


};
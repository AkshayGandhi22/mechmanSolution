createAccordian(document.querySelector('app-accordion[id="autoDeskAutocadLT"]'), [
    {
        itemId: 1,
        title: "2d drafting, drawing, and annotation",
        description: `<p><b>Text formatting</b><br>Create single or multiline text (mtext) as a single text object. Format the text, columns, and boundaries.</p>
        <p><b>Smart dimensioning</b><br>Create dimensions automatically. Pass the cursor over selected objects to get a preview before you create it. </p>
        <p><b>Leaders</b><br>Create leaders with a variety of content, including text or blocks. Easily format leader lines and define styles.</p>
        <p><b>Smart centerlines and center marks</b><br>Create and edit centerlines and center marks that automatically move when you move the associated objects.</p>
        <p><b>Tables</b><br>Create tables with data and symbols in rows and columns, apply formulas, and link to a Microsoft Excel spreadsheet. </p>
        <p><b>Revision clouds</b><br>Draw revision clouds around new changes in a drawing to quickly identify your updates.</p>
        <p><b>Layouts</b><br>Specify the size of your drawing sheet, add a title block, and display multiple views of your model.</p>
        <p><b>Layout viewports</b><br>Create layout viewports to display different elements of your design at varying scales. </p>
        <p><b>Fields</b><br>Use fields in text objects to display text that can be updated automatically as the field value changes.</p>
        <p><b>Data linking</b><br>Enable simultaneous updates by creating a live link between a Microsoft Excel spreadsheet and a table in your drawing. </p>
        ` },
    {
        itemId: 2,
        title: "Collaboration",
        description: `<p><b>PDF and DGN import/export/underlay</b><br>Share and reuse data from PDF and DGN files by importing, exporting, or attaching them as underlays.</p>
        <p><b>DWG and image references</b><br>Attach drawings and images to your current drawing as externally referenced files. </p>
        <p><b>Geographic location and online maps </b><br>Insert geographic location information into a drawing, and display a map in the drawing from an online map service. </p>
        `
    },
    {
        itemId: 3,
        title: "Installation and customization",
        description: `<p><b>TrustedDWG technology</b><br>TrustedDWG technology lets you know of a possible incompatibility when a file was not last saved by an Autodesk software product.</p>
        <p><b>Migration tool</b><br>Migrate your custom settings and files from previous releases. </p>
        <p><b>CUI customization</b><br>Customize the user interface to improve accessibility and reduce the number of steps for frequent tasks.</p>
        <p><b>Sysvar monitor</b><br>Monitor current system variables against a preferred list of values. Notification balloons alert you of deviations.</p>
        <p><b>Autodesk desktop app</b><br>Get alerts and install software updates without disrupting your workflow. View tutorials about new features.</p>`
    }
]);

createAccordian(document.querySelector('app-accordion[id="autoDeskAutocad"]'), [
    {
        itemId: 4,
        title: "2d drafting, drawing, and annotation",
        description: `
        <p><b>Text settings</b><br>Create single or multiline text (mtext) as a single text object. Easily format text, columns, and boundaries.</p>
        <p><b>Dimensions</b><br>Create dimensions automatically. Pass the cursor over selected objects to see a preview before you create it.</p>
        <p><b>Tables</b><br>Apply formulas, link to Microsoft Excel spreadsheets, and create tables with data and symbols. Automatically import data to tables using features like Count.</p>
        <p><b>Leaders</b><br>Create leaders with a variety of content, including text or blocks. Easily format leader lines and define styles.</p>
        <p><b>Centerlines and center marks</b><br>Create and edit centerlines and center marks that automatically move when you move the associated objects.</p>
        <p><b>Revision clouds</b><br>Draw revision clouds around new changes in a drawing to quickly identify your updates.</p>
        <p><b>Views</b><br>Save views by name to easily return to a specific view for quick reference or for applying to layout viewports.</p>
        <p><b>Layouts</b><br>Specify the size of your drawing sheet, add a title block, and display multiple views of your model.</p>
        <p><b>Fields</b><br>Use fields in text objects to display text that can be updated automatically as the field value changes.</p>
        <p><b>Data linking</b><br>Enable simultaneous updates by creating a live link between a Microsoft Excel spreadsheet and a table in your drawing.</p>
        <p><b>Data extraction</b><br>Extract information from objects, blocks, and attributes, including drawing information.</p>
        <p><b>Dynamic blocks</b><br>Add flexibility and intelligence to your block references, including changing the shape, size, or configuration.</p>
        <p><b>Arrays</b><br>Create and modify objects in circular or rectangular patterns, or along a path.</p>
        <p><b>Parametric constraints</b><br>Apply geometric and dimensional constraints to maintain relationships between drawing geometry.</p>
        <p><b>Purge</b><br>Remove multiple unneeded objects at once with easy selection and object preview.</p>
        ` },
    {
        itemId: 5,
        title: "3d modeling and visualization",
        description: `
        <p><b>Solid, surface, and mesh modeling</b><br>Create realistic 3D models of your design using a combination of solid, surface, and mesh modeling tools.</p>
        <p><b>3D navigation (orbit, ViewCube, wheel)</b><br>Use 3D viewing and navigation tools to orbit, swivel, walk, and fly around a 3D model to showcase your design.</p>
        <p><b>Visual styles</b><br>Apply visual styles to control the display of edges, lighting, and shading of your 3D model.</p>
        <p><b>Section planes</b><br>Create section planes to display cross-sectional views through solids, surfaces, meshes, or regions.</p>
        <p><b>Rendering</b><br>Apply lighting and materials to give your 3D models a realistic appearance and to help communicate your designs.</p>
        <p><b>Cloud rendering</b><br>Render 3D models online without consuming processing power or disk space on your local computer.</p>
        <p><b>Point clouds</b><br>Attach point cloud files acquired by 3D laser scanners or other technologies to use as a starting point for your designs.</p>
        <p><b>Model documentation</b><br>Generate 2D drawings including base, projected, section, and detail views from 3D models.</p>
        `
    },
    {
        itemId: 6,
        title: "Collaboration",
        description: `
        <p><b>Xref Compare</b><br>Compare two versions of a drawing, including external references (xrefs).</p>
        <p><b>PDF files</b><br>Share and reuse data from PDF files by importing, exporting, or attaching them as underlays.</p>
        <p><b>DGN Files</b><br>Share and reuse data from DGN files by importing, exporting, or attaching them as underlays.</p>
        <p><b>DWG Compare</b><br>Compare two versions of a drawing without leaving your current window.</p>
        <p><b>Sheet sets</b><br>View, access, manage, and plot multiple drawings as sheet sets.</p>
        <p><b>Model references and import</b><br>Attach Navisworks models as underlays to your drawings, and import models from other applications.</p>
        <p><b>Geographic location and online maps</b><br>Insert geographic location information into a drawing, and display a map in the drawing from an online map service.</p>
        `
    },
    {
        itemId: 7,
        title: "Installation and customization",
        description: `
        <p><b>Simplified installer</b><br>Reduce the amount of time you spend setting up AutoCAD with faster and customizable installations.</p>
        <p><b>Start tab</b><br>The new AutoCAD Start tab lets you easily access files and other helpful content directly from the home screen.</p>
        <p><b>TrustedDWG technology</b><br>TrustedDWG® technology alerts you to a possible incompatibility when a file was not last saved by Autodesk software.</p>
        <p><b>CUI customization</b><br>Customize the user interface to improve accessibility and reduce the number of steps for frequent tasks.</p>
        <p><b>Secure load</b><br>Specify security restrictions for running executables in AutoCAD to help protect against malicious executable code.</p>
        <p><b>Action recorder</b><br>Record commands and input values that can be played back as an action macro.</p>
        <p><b>System variable monitor</b><br>Monitor current system variables against a preferred list of values. Notification balloons alert you to deviations.</p>
        <p><b>CAD standards checker</b><br>Define and monitor CAD standards to maintain consistent styles for layers, linetypes, text, and dimensions.</p>
        <p><b>Application Programming Interface (API)</b><br>Control drawings and databases with ActiveX, VBS, AutoLisp, Visual LISP, ObjectARX, JavaScript, and .NET.</p>
        <p><b>Autodesk App Store</b><br>Customize your software with Autodesk-approved extensions.</p>
        `
    }
]);
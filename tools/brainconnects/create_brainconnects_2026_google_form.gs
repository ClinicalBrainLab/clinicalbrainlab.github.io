function createBrainConnects2026AbstractForm() {
  const form = FormApp.create('BrainConnects 2026 Abstract Submission');
  form.setTitle('BrainConnects 2026 Abstract Submission');
  form.setDescription(
    'BrainConnects 2026: Shared Signals, Connected Learning\n' +
    'Conference dates: 29 September - 2 October 2027\n' +
    'Location: LKCMedicine HQ, Novena Campus, NTU\n' +
    'Abstract submission deadline: 10 September 2026\n\n' +
    'Please complete all required fields. The structured abstract should be no more than 350 words total.'
  );
  form.setConfirmationMessage(
    'Thank you for submitting your abstract to BrainConnects 2026. The organising team will contact the presenting/corresponding author after review.'
  );
  form.setCollectEmail(true);
  form.setAllowResponseEdits(true);
  form.setShowLinkToRespondAgain(false);
  form.setAcceptingResponses(true);

  const sheet = SpreadsheetApp.create('BrainConnects 2026 Abstract Submissions');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());

  form.addSectionHeaderItem()
    .setTitle('1. Presenting and Corresponding Author');

  form.addTextItem()
    .setTitle('Presenting author name')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Presenting author email')
    .setRequired(true)
    .setValidation(FormApp.createTextValidation()
      .requireTextIsEmail()
      .setHelpText('Please enter a valid email address.')
      .build());

  form.addTextItem()
    .setTitle('Presenting author affiliation')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Corresponding author email, if different')
    .setRequired(false)
    .setValidation(FormApp.createTextValidation()
      .requireTextIsEmail()
      .setHelpText('Please enter a valid email address, or leave this blank.')
      .build());

  form.addSectionHeaderItem()
    .setTitle('2. Abstract Details');

  form.addTextItem()
    .setTitle('Abstract title')
    .setHelpText('Maximum 250 characters.')
    .setRequired(true)
    .setValidation(FormApp.createTextValidation()
      .requireTextLengthLessThanOrEqualTo(250)
      .setHelpText('Please keep the title to 250 characters or fewer.')
      .build());

  form.addParagraphTextItem()
    .setTitle('Authors and affiliations')
    .setHelpText('Example: Chen, S.H.A.1; Ng, A.2\\n1 Centre for Research and Development in Learning, NTU; 2 National Institute of Education')
    .setRequired(true);

  form.addListItem()
    .setTitle('Primary topic category')
    .setChoiceValues([
      'Shared attention, synchrony, and hyperscanning',
      'fNIRS, EEG, and portable neuroimaging',
      'Multimodal signals and real-world learning',
      'Science of learning and education',
      'Mental health, cognition, and human development',
      'Clinical, translational, and rehabilitation neuroscience',
      'Methods, tools, AI, and open science',
      'Technology demonstration or fNIRS workshop contribution'
    ])
    .setRequired(true);

  form.addListItem()
    .setTitle('Presentation preference')
    .setChoiceValues([
      'Poster presentation',
      'Oral presentation',
      'Either poster or oral',
      'Workshop demonstration'
    ])
    .setRequired(true);

  form.addTextItem()
    .setTitle('Keywords')
    .setHelpText('Please provide 3-5 keywords, separated by semicolons or commas.')
    .setRequired(true);

  form.addSectionHeaderItem()
    .setTitle('3. Structured Abstract')
    .setHelpText('Please keep Background/Objectives, Methods, Results, and Conclusions/Significance within 350 words total.');

  form.addParagraphTextItem()
    .setTitle('Background and objectives')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Methods')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Results')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Conclusions and significance')
    .setRequired(true);

  form.addSectionHeaderItem()
    .setTitle('4. Declarations');

  form.addParagraphTextItem()
    .setTitle('Ethics approval / exemption / not applicable')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Conflicts of interest')
    .setHelpText("Write 'None' if there are no conflicts to declare.")
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Funding or acknowledgements')
    .setRequired(false);

  form.addCheckboxItem()
    .setTitle('Author confirmations')
    .setChoiceValues([
      'I confirm that the abstract has been reviewed by all listed authors.',
      'I confirm that the presenting author is available to present if accepted.',
      'I agree that the organisers may contact the presenting/corresponding author about this submission.'
    ])
    .setRequired(true);

  Logger.log('Edit form: ' + form.getEditUrl());
  Logger.log('Public form: ' + form.getPublishedUrl());
  Logger.log('Responses spreadsheet: ' + sheet.getUrl());
}

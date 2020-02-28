var container = document.querySelector('.text');

var line;
var vh;
var yHeight;
var xWidth;
var numOfPoints = 5;

init();

function init() {
	// stores heights of line
	vh = view.size.height;
	yHeight = [ vh * 0.2, vh * 0.25, vh * 0.6, vh * 0.8, vh * 0.5 ];

	xWidth = view.size.width / 16;

	line = new Path();
	line.style = {
		strokeColor: 'black',
		strokeWidth: 5
	};

	for (i = 0; i < numOfPoints; i++) {
		xWidth = xWidth + i * 50;
		line.add(new Point((x += xWidth), yHeight[i]));

		classCheck = document.querySelector('.footnote-num-' + i);

		if (!classCheck && i > 0) {
			// add footnote div that sets width
			footnoteDiv = document.createElement('div');
			footnoteDiv.classList.add('footnoteDiv');
			footnoteDiv.classList.add('footnote-num-' + i);
			container.appendChild(footnoteDiv);

			// because it's flex, the x is defined by where the first one starts (everything else stacks based on the width of the previous div)
			var pointX = line.segments[0].point.x;
			footnoteDiv.style.left = pointX + 'px';

			// set width for div
			footnoteDivWidth = line.segments[i].point.x - line.segments[i - 1].point.x;
			footnoteDiv.style.width = footnoteDivWidth + 'px';

			// add footnote content which is sticky
			footnoteContent = document.createElement('p');
			footnoteContent.classList.add('footnoteContent');
			footnoteContent.innerHTML = 'Test num: ' + i + 'x pos: ' + pointX;
			footnoteDiv.appendChild(footnoteContent);
		}
		// left: ${x-value}
	}

	line.selected = true;
	line.smooth({ type: 'continuous' });
}

function onResize() {
	line.remove();
	container.innerHTML = '';
	init();
}

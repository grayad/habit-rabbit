async function upcountClickHandler(event) {
    event.preventDefault();

    if (event.target.nodeName != 'BUTTON')
        return;

    console.log(event.target.id);

    const response = await fetch('/api/counts/upCount/' + event.target.id, {
        method: 'PUT',
        body: JSON.stringify({
          id: event.target.id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }}

window.addEventListener('click', upcountClickHandler);
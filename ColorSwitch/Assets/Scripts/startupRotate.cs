using UnityEngine;

public class startupRotate : MonoBehaviour {
	public float rotate = 90f;
	private float multiplier = 1f;
	private int score = 0;
	private TextMesh scoreTextMesh;

	public GameObject scoreText;

	void Start() {
		scoreText = GameObject.Find ("Score");
		scoreTextMesh = scoreText.GetComponent<TextMesh>();
		score = int.Parse(scoreTextMesh.text);
		if (score > 0) 
		{
			multiplier += ((int)(score / 5)) * 0.2f;
			rotate *= multiplier;
			//Debug.Log ("multiplied to - " + rotate);
		};
	}

	// Update is called once per frame
	void Update () {
		transform.Rotate(Vector3.forward, rotate * Time.deltaTime);
	}
}
